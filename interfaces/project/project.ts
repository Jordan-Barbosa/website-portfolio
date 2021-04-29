export interface Project {
  _id: string;
  name: string;
  desc: string;
  url: string;
  github: string;
  technology: string[];
  isHeroku: boolean;
}
