import paths from "../../utils/paths";
import PathItem from "../PathItem";

const PathsList = () => {
  return (
    <>
      {paths.slice(1).map((path) => (
        <PathItem key={path.label} path={path} />
      ))}
    </>
  );
};

export default PathsList;
