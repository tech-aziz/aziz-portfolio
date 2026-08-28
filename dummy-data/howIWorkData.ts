export interface WorkMethod {
  iconName: string;
  title: string;
  description: string;
}

export const howIWorkData: {
  heading: string;
  subheading: string;
  methods: WorkMethod[];
} = {
  heading: "How I Work",
  subheading:
    "I start by locking scope, keep progress visible with reviewable milestones, and own the release through launch and stabilization.",
  methods: [
    {
      iconName: "Search",
      title: "Scope First",
      description:
        "I align on platforms, user flows, backend dependencies, subscriptions, notifications, store constraints, and success criteria before implementation starts. That keeps timelines realistic and reduces avoidable rework.",
    },
    {
      iconName: "BrainCircuit",
      title: "AI-Augmented Delivery",
      description:
        "I use ChatGPT, Codex, and Claude to accelerate debugging, diff review, implementation support, and edge-case exploration across Flutter and mobile architectures. Human review stays in every architecture and release-critical decision.",
    },
    {
      iconName: "TrendingUp",
      title: "Visible Progress",
      description:
        "Work moves in reviewable milestones with concise async updates, demoable builds, and early risk flags. Clients know what shipped, what needs review, what is blocked, and what comes next.",
    },
    {
      iconName: "Upload",
      title: "Release Ownership",
      description:
        "I own the last mile: regression checks, release builds, store submission, rollout planning, Shorebird hotfixes, and post-launch stabilization. The target is a dependable release, not a handoff with loose ends.",
    },
  ],
};
