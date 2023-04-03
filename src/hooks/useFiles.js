import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles, getFile } from "../features/files/filesAPI";

const useFiles = () => {
  const [search, setSearch] = useState("");
  const { loading, files, error } = useSelector((state) => state.files);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFiles());
  }, [dispatch]);

  const handleChange = (e) => setSearch(e.target.value);

  const handleSearch = () => dispatch(getFile(search));

  return {
    loading,
    files,
    error,
    handleChange,
    handleSearch,
  };
};

export default useFiles;
