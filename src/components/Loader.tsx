import style from "@/styles/loader.module.css";

const Loader = ({ loading = true }: { loading?: boolean }) => {
  return loading ? (
    <div className={(style as any).center} data-testid='loading'>
      <span className={(style as any).loader}></span>
    </div>
  ) : null;
};

export default Loader;
