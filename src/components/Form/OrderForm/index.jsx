import {useState} from "react";
import {useNavigate} from "react-router-dom";

import TextInput from "/src/components/Form/Input/TextInput";
import styles from "/src/components/Form/OrderForm/index.module.scss";

export default function OrderForm() {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null,
        address: {
            street: null,
            complement: null,
            postalCode: null,
            city: null,
        },
    });

    const handleChangeFirstName = event => {
        const firstName = event.target.value;

        setUserDetails(previousUserDetails => ({...previousUserDetails, firstName}));
    };

    const handleChangeLastName = event => {
        const lastName = event.target.value;

        setUserDetails(previousUserDetails => ({...previousUserDetails, lastName}));
    };

    const handleChangeEmail = event => {
        const email = event.target.value;

        setUserDetails(previousUserDetails => ({...previousUserDetails, email}));
    };

    const handleChangePhoneNumber = event => {
        const phoneNumber = event.target.value;

        setUserDetails(previousUserDetails => ({...previousUserDetails, phoneNumber}));
    };

    const handleChangeAddressStreet = event => {
        const street = event.target.value;

        setUserDetails(previousUserDetails => ({...previousUserDetails, address: {...previousUserDetails.address, street}}));
    };

    const handleChangeAddressComplement = event => {
        const complement = event.target.value;

        setUserDetails(previousUserDetails => ({...previousUserDetails, address: {...previousUserDetails.address, complement}}));
    };

    const handleChangeAddressPostalCode = event => {
        const postalCode = event.target.value;

        setUserDetails(previousUserDetails => ({...previousUserDetails, address: {...previousUserDetails.address, postalCode}}));
    };

    const handleChangeAddressCity = event => {
        const city = event.target.value;

        setUserDetails(previousUserDetails => ({...previousUserDetails, address: {...previousUserDetails.address, city}}));
    };

    const handleSubmit = event => {
        event.preventDefault();

        navigate("/cart/thanks");
    };

    return (
        <form className={styles.orderForm} onSubmit={handleSubmit}>
            <div className={styles.orderForm__inputGroup}>
                <TextInput
                    type="text"
                    placeholder="First name"
                    value={userDetails.firstName}
                    required={true}
                    onChange={handleChangeFirstName}
                />

                <TextInput
                    type="text"
                    placeholder="Last name"
                    value={userDetails.lastName}
                    required={true}
                    onChange={handleChangeLastName}
                />
            </div>

            <div className={styles.orderForm__inputGroup}>
                <TextInput
                    type="email"
                    placeholder="Email"
                    value={userDetails.email}
                    required={true}
                    onChange={handleChangeEmail}
                />

                <TextInput
                    type="tel"
                    placeholder="Phone number"
                    value={userDetails.phoneNumber}
                    required={false}
                    onChange={handleChangePhoneNumber}
                />
            </div>

            <div className={styles.orderForm__subForm}>
                <span className={styles.orderForm__subForm__title}>
                    Address
                </span>

                <div className={styles.orderForm__inputGroup}>
                    <TextInput
                        type="text"
                        placeholder="Street"
                        value={userDetails.address.street}
                        required={true}
                        onChange={handleChangeAddressStreet}
                    />

                    <TextInput
                        type="text"
                        placeholder="Complement"
                        value={userDetails.address.complement}
                        required={false}
                        onChange={handleChangeAddressComplement}
                    />
                </div>

                <div className={styles.orderForm__inputGroup}>
                    <TextInput
                        type="text"
                        placeholder="Postal code"
                        value={userDetails.address.postalCode}
                        required={true}
                        maxLength={5}
                        onChange={handleChangeAddressPostalCode}
                    />

                    <TextInput
                        type="text"
                        placeholder="City"
                        value={userDetails.address.city}
                        required={true}
                        onChange={handleChangeAddressCity}
                    />
                </div>
            </div>

            <div className={styles.orderForm__footer}>
                <input type="submit" value="Process to payment" className={styles.orderForm__footer__submit} />
            </div>
        </form>
    );
}