# Arun Bongu — AI Generalist Portfolio

Professional portfolio showcasing AI-powered projects built using Claude Opus 4.6, Claude Code, Cursor, GitHub Copilot, Jira MCP Server, Confluence MCP Server, and AWS Bedrock.

## Projects

| Project | Stack | Description |
|---|---|---|
| **LOB & Compliance Dashboard** | Python, Plotly/Dash, Jira MCP, Claude Opus 4.6 | Enterprise GTRM KRI1 compliance analytics + Jira story automation via MCP |
| [knowledge-graph-rag](https://github.com/akbongu/knowledge-graph-rag) | Python, LangChain 0.3, Neo4j, GPT-4o-mini | RAG system with Neo4j knowledge graphs and hybrid retrieval |
| [technology-resiliency](https://github.com/akbongu/technology-resiliency) | Node.js, Express, AWS/Azure/GCP/OCI SDKs | Multi-cloud DR test automation platform |
| [aws-compute-creator](https://github.com/akbongu/aws-compute-creator) | Next.js 16, TypeScript, AWS SDK v3 | EC2 provisioning dashboard deployed on Vercel |
| [inference-server](https://github.com/akbongu/inference-server) | Python, Amazon SageMaker, Docker | Published pip package for ML model deployment (J.P. Morgan Chase open-source) |
| [RiskyOptionsBot](https://github.com/akbongu/RiskyOptionsBot) | Python, ib_insync, APScheduler | Algorithmic trading bot — 2-DTE SPY options on IBKR TWS |
| [finops-aws-lightswitch-pattern](https://github.com/akbongu/finops-aws-lightswitch-pattern) | Terraform, Lambda, EventBridge | FinOps cost control via scheduled on/off switching |

## MCP Servers

- **Jira MCP Server** — auto-creates SR-Test & CSP-Test noncompliant Jira stories in project `CDAOTECHRES2`, assigns to epics, runs JQL queries
- **Confluence MCP Server** — documentation and knowledge integration in the compliance workflow

## Agent Instruction Files (SKILL.md / AGENTS.md)

| File | Project | Purpose |
|---|---|---|
| `jira-amdp-noncompliant/SKILL.md` | Compliance Dashboard | 100-line Jira MCP skill — story templates, workflows, column mappings, dashboard launcher |
| `technology-resiliency.SKILL.md` | technology-resiliency | DR agent capabilities, chaos tools, expected outputs |
| `technology-resiliency.agent.md` | technology-resiliency | EC2 failover agent — CLI commands, runbooks, rollback steps |
| `technology-resiliency.instructions.md` | technology-resiliency | System prompt for DR test planning |
| `aws-compute-creator SKILL.md` | aws-compute-creator | Ops skill — architecture map, credential rules, AMI pipeline |
| `aws-compute-creator AGENTS.md` | aws-compute-creator | "Read Next.js docs before writing code" — breaking-changes guard |

## AI Tools Used

- **Claude Opus 4.6** — architecture, code generation, SKILL.md authoring, compliance dashboard iteration
- **Claude Code** — agentic CLI for full-repo edits, scaffolding, multi-file refactoring
- **Cursor** — AI-native editor for TypeScript & Python codebases
- **GitHub Copilot** — in-editor suggestions, docstrings, test scaffolding (VS Code)
- **Jira MCP Server** — automated Jira story creation and epic assignment
- **Confluence MCP Server** — documentation automation
- **AWS Bedrock** — cloud-native LLM hosting
- **OpenAI GPT-4o-mini** — LangChain RAG pipeline core

## Live

- **GitHub**: [github.com/akbongu](https://github.com/akbongu)
- **Portfolio**: [akbongu.github.io/professional-profile](https://akbongu.github.io/professional-profile/)
