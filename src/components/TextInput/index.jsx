import './styles.css';

export const TextInput = ({ searchValue, handleInputChange }) => {
  return (
    <input
      className="text-input"
      onChange={handleInputChange}
      value={searchValue}
      type="search"
      placeholder="Faça uma busca..."
    />
  )
}