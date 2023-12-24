import overview from "./assets/svg/overview.svg";
import tickets from "./assets/svg/tickets.svg";
import ideas from "./assets/svg/ideas.svg";
import contacts from "./assets/svg/contacts.svg";
import agents from "./assets/svg/agents.svg";
import articles from "./assets/svg/articles.svg";
import settings from "./assets/svg/settings.svg";
import subscription from "./assets/svg/subscription.svg";

export const SIDEBAR_ELEMENTS = [
  {
    id: 1,
    img: overview,
    title: "Overview",
  },
  {
    id: 2,
    img: tickets,
    title: "Tickets",
  },
  {
    id: 3,
    img: ideas,
    title: "Ideas",
  },
  {
    id: 4,
    img: contacts,
    title: "Contacts",
  },
  {
    id: 5,
    img: agents,
    title: "Agents",
  },
  {
    id: 6,
    img: articles,
    title: "Articles",
  },
  {
    id: 7,
    img: settings,
    title: "Settings",
  },
  {
    id: 8,
    img: subscription,
    title: "Subscription",
  },
];

export const OVERALL_DATA = [
  {
    id: 1,
    title: "Unresolved",
    amount: 60,
  },
  {
    id: 2,
    title: "Overdue",
    amount: 16,
  },
  {
    id: 3,
    title: "Open",
    amount: 43,
  },
  {
    id: 4,
    title: "On hold",
    amount: 64,
  },
];
