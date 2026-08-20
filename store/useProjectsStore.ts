import { create } from "zustand";
import { PROJECTS_LIST, ProjectCardData, filterTabsData, FilterTab } from "../dummy-data/projectsData";

interface ProjectsState {
  activeFilter: string;
  searchQuery: string;
  selectedProject: ProjectCardData | null;
  projects: ProjectCardData[];
  filterTabs: Array<FilterTab & { count: number }>;
  setActiveFilter: (filter: string) => void;
  setSearchQuery: (query: string) => void;
  setSelectedProject: (project: ProjectCardData | null) => void;
  getFilteredProjects: () => ProjectCardData[];
}

export const useProjectsStore = create<ProjectsState>((set, get) => {
  // Compute project counts for filters dynamically
  const filterTabs = filterTabsData.map((tab) => {
    const count =
      tab.id === "all"
        ? PROJECTS_LIST.length
        : PROJECTS_LIST.filter((p) => p.filterCategories.includes(tab.id)).length;
    return { ...tab, count };
  });

  return {
    activeFilter: "all",
    searchQuery: "",
    selectedProject: null,
    projects: PROJECTS_LIST,
    filterTabs,
    setActiveFilter: (filter) => set({ activeFilter: filter }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    setSelectedProject: (project) => set({ selectedProject: project }),
    getFilteredProjects: () => {
      const { activeFilter, searchQuery, projects } = get();
      return projects.filter((project) => {
        let matchesFilter = true;
        if (activeFilter !== "all") {
          matchesFilter = project.filterCategories.includes(activeFilter);
        }

        let matchesSearch = true;
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          matchesSearch =
            project.title.toLowerCase().includes(q) ||
            project.subtitle.toLowerCase().includes(q) ||
            project.description.toLowerCase().includes(q) ||
            project.tech.some((t) => t.toLowerCase().includes(q));
        }

        return matchesFilter && matchesSearch;
      });
    },
  };
});
