/**
 * @param {Object} props
 * @param {Boolean} [props.multiple]
 * @param {String} props.placeholder
 * @param {?String} [props.defaultValue]
 * @param {String[]} props.options
 * @param {Boolean} props.required
 * @param {Function} props.onChange
 */
export default function Select({multiple = false, placeholder, defaultValue, options, required, onChange}) {
    return (
        <select
            multiple={multiple}
            defaultValue={defaultValue ?? (multiple ? [] : "")}
            required={required}
            onChange={onChange}
        >
            <option value="" disabled>
                {placeholder} {required && "*"}
            </option>

            {options.map((option, index) => (
                <option key={index}>
                    {option}
                </option>
            ))}
        </select>
    );
}