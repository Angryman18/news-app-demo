import "@/styles/loader.css";

const Loader = ({ loading = true }: { loading?: boolean }) => {
  return loading ? (
    <div className='center' data-testid="loading">
      <span className='loader'></span>
    </div>
  ) : null;
};

export default Loader;
