import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";

interface ContactNotificationEmailProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function ContactNotificationEmail({
    name,
    email,
    subject,
    message,
}: ContactNotificationEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New contact form submission from {name}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>New Contact Form Submission</Heading>

                    <Section style={section}>
                        <Text style={label}>Name:</Text>
                        <Text style={value}>{name}</Text>
                    </Section>

                    <Section style={section}>
                        <Text style={label}>Email:</Text>
                        <Text style={value}>
                            <a href={`mailto:${email}`} style={link}>
                                {email}
                            </a>
                        </Text>
                    </Section>

                    <Section style={section}>
                        <Text style={label}>Subject:</Text>
                        <Text style={value}>{subject}</Text>
                    </Section>

                    <Section style={section}>
                        <Text style={label}>Message:</Text>
                        <Text style={messageText}>{message}</Text>
                    </Section>

                    <Section style={footer}>
                        <Text style={footerText}>
                            This message was sent from your website contact
                            form.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "560px",
};

const h1 = {
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
};

const section = {
    padding: "24px",
    backgroundColor: "#f6f9fc",
    borderRadius: "8px",
    marginBottom: "16px",
};

const label = {
    color: "#333",
    fontSize: "14px",
    fontWeight: "bold",
    margin: "0 0 8px 0",
};

const value = {
    color: "#333",
    fontSize: "16px",
    margin: "0",
};

const messageText = {
    color: "#333",
    fontSize: "16px",
    margin: "0",
    whiteSpace: "pre-wrap",
};

const link = {
    color: "#0070f3",
    textDecoration: "underline",
};

const footer = {
    marginTop: "32px",
    padding: "24px",
    backgroundColor: "#f6f9fc",
    borderRadius: "8px",
};

const footerText = {
    color: "#666",
    fontSize: "14px",
    margin: "0",
    textAlign: "center" as const,
};
