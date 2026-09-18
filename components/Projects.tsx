import { getProjectsData } from '@/lib/projects';
import MyLink from './MyLink';
import { FaWhatsapp, FaMeta, FaPodcast } from 'react-icons/fa6';

export default function Projects() {
  const projects = getProjectsData();
  const navigator = projects.find((p) => p.id === "navigator");
  const shopify = projects.find((p) => p.id === "shopify");
  const podcast = projects.find((p) => p.id === "podcast")

  return (
      <ul>
        {navigator && <li><MyLink url={navigator.url} text={navigator.title} options={{ isExternal: true, icon: FaMeta }} /></li>}
        {shopify && <li><MyLink url={shopify.url} text={shopify.title} options={{ isExternal: true, icon: FaWhatsapp }} /></li>}
        {podcast && <li><MyLink url={podcast.url} text={podcast.title} options={{ isExternal: true, icon: FaPodcast }} /></li>}
      </ul>
  );
};