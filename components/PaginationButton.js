const PaginationButton = ({next, prev}) => {
  return (
    <div className="container-xl d-flex justify-content-around">
      <button onClick={()=>prev()} className="btn btn-dark ">prev</button>
      <button onClick={()=>next()} className="btn btn-dark">next</button>
    </div>
  );
};

export default PaginationButton;
