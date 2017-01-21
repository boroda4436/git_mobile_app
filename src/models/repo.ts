/**
 * Created by Bohdan on 16.01.2017.
 */
import { User } from '../models/user';
export interface Repo{
  id: number;
  name: string;
  full_name: string;
  description: string;
  url: string;
  html_url: string;
  owner: User;
}
