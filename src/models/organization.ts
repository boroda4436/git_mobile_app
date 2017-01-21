/**
 * Created by Bohdan on 21.01.2017.
 */
export interface Organization{
  id: number;
  login: string;
  description: string;
  location: string;
  collaborators: number;
  avatar_url: string;
  html_url: string;
}
