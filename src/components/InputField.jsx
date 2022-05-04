export default function InputField({ setup, state }) {
  const { label, placeholder, type } = setup;
  const [value, setValue] = state;

  return (
    <div id="input-field">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
