import {useState} from "react";

import styles from "/src/components/Button/AddToCartButton/index.module.scss";
import tag from "/src/utils/tag";

/**
 * @param {Object} props
 * @param {Boolean} props.isChecked
 * @param {Function} props.onClick
 */
export default function AddToCartButton({isChecked: _isChecked, onClick}) {
    const [isChecked, setIsChecked] = useState(_isChecked);

    const handleClick = () => {
        onClick();

        setIsChecked(!isChecked);
    };

    return (
        <button title="Add to cart" className={tag`${styles.addToCartButton} ${isChecked && styles.addToCartButton__checked}`} onClick={handleClick}>
            {isChecked ? (
                <>
                	&#45;
                </>
            ) : (
                <>
                    &#43;
                </>
            )}
        </button>
    );
}