const Sorter = ({ handleSortbyChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSortbyChange(event.target.value);
  };

  return (
    <div>
      <select className="Sorter" onChange={handleSubmit}>
        <option value="created_at">Date</option>
      </select>
    </div>
  );
};

export default Sorter;
