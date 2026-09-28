import { getProjectsData } from '@/lib/projects';
import MyLink from './MyLink';

export default function Projects() {
  const projects = getProjectsData();
  const navigator = projects.find((p) => p.id === "navigator");
  const shopify = projects.find((p) => p.id === "shopify");
  const podcast = projects.find((p) => p.id === "podcast");
  const game = projects.find((p) => p.id === "game");

  return (
    <ul>
      {shopify && <li><MyLink url={shopify.url} text={shopify.title} options={{ isExternal: true }} /></li>}
      {navigator && <li><MyLink url={navigator.url} text={navigator.title} options={{ isExternal: true }} /></li>}
      {podcast && <li><MyLink url={podcast.url} text={podcast.title} options={{ isExternal: true }} /></li>}
      {game && <li><MyLink url={game.url} text={game.title} options={{ isExternal: true }} /></li>}
    </ul>
  );
};