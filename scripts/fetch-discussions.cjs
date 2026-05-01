#!/usr/bin/env node
/**
 * Build-time script: fetch GitHub Discussions and save as static JSON.
 * Uses GITHUB_TOKEN from environment for authentication.
 */

const fs = require("fs");
const path = require("path");

const GQL_API = "https://api.github.com/graphql";
const REPO_ID = "R_kgDOSRWlUQ";
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";

async function fetchDiscussions() {
  const query = `
    query($repoId: ID!, $first: Int!) {
      node(id: $repoId) {
        ... on Repository {
          discussions(first: $first, orderBy: { field: CREATED_AT, direction: DESC }) {
            nodes {
              id
              number
              title
              url
              body
              createdAt
              updatedAt
              answerChosenAt
              category { id name emoji }
              author { login avatarUrl url }
              comments { totalCount }
              upvoteCount
            }
          }
        }
      }
    }
  `;

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/vnd.github+json",
  };
  if (TOKEN) {
    headers["Authorization"] = `Bearer ${TOKEN}`;
  }

  const resp = await fetch(GQL_API, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables: { repoId: REPO_ID, first: 50 } }),
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`GitHub API ${resp.status}: ${text}`);
  }

  const json = await resp.json();
  if (json.errors) {
    throw new Error(json.errors[0]?.message || "GraphQL error");
  }

  const nodes = json.data?.node?.discussions?.nodes || [];
  return nodes.map((n) => ({
    id: n.id,
    number: n.number,
    title: n.title,
    url: n.url,
    body: n.body || null,
    createdAt: n.createdAt,
    updatedAt: n.updatedAt,
    answerChosenAt: n.answerChosenAt || null,
    category: n.category,
    author: {
      login: n.author.login,
      avatarUrl: n.author.avatarUrl,
      url: n.author.url,
    },
    commentsCount: n.comments?.totalCount || 0,
    upvoteCount: n.upvoteCount || 0,
  }));
}

async function main() {
  console.log("📡 Fetching GitHub Discussions...");
  if (!TOKEN) {
    console.warn("⚠️  No GITHUB_TOKEN set — unauthenticated request (rate limit: 60/hr)");
  }

  try {
    const discussions = await fetchDiscussions();
    const outDir = path.join(__dirname, "..", "public");
    const outFile = path.join(outDir, "discussions.json");

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    const data = {
      fetchedAt: new Date().toISOString(),
      count: discussions.length,
      discussions,
    };

    fs.writeFileSync(outFile, JSON.stringify(data), "utf-8");
    console.log(`✅ Saved ${discussions.length} discussions to public/discussions.json`);
  } catch (err) {
    // Don't fail the build if discussions fetch fails
    console.error(`⚠️  Failed to fetch discussions: ${err.message}`);
    const outFile = path.join(__dirname, "..", "public", "discussions.json");
    fs.writeFileSync(
      outFile,
      JSON.stringify({ fetchedAt: new Date().toISOString(), count: 0, discussions: [], error: err.message }),
      "utf-8",
    );
    console.log("📝 Saved empty discussions.json (build will continue)");
  }
}

main();
