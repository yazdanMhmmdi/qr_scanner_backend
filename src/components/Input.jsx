export default function Input({ placeholder, onChange }) {
  return (
    <div dir="rtl" className="custom-input">
      <input type="text" onChange={onChange} id="customInput" placeholder="" />
      <label htmlFor="customInput">{placeholder}</label>
    </div>
  );
}
