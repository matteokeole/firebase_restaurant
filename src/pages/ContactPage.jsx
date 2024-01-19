import ContactMethods from "/src/components/ContactMethods/ContactMethods";
import Container from "/src/components/Container/Container";
import Map from "/src/components/Map/Map";

export default function ContactPage() {
    return (
        <Container>
            <h1>
                Contact Us
            </h1>

            <ContactMethods />

            <Map />
        </Container>
    );
}