import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio contact form</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>

          <Text style={text}>
            You received a new message from <strong>{name}</strong>.
          </Text>

          <Section style={section}>
            <Text style={label}>From:</Text>
            <Text style={value}>
              {name} ({email})
            </Text>

            <Hr style={hr} />

            <Text style={label}>Message:</Text>
            <Text style={paragraph}>{message}</Text>
          </Section>

          <Text style={footer}>
            <a href={`mailto:${email}`} style={link}>
              Click here to reply directly to {name}
            </a>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}


const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  margin: "0 20px",
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
  margin: "20px",
};

const label = {
  color: "#666",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
  marginBottom: "4px",
};

const value = {
  color: "#333",
  fontSize: "16px",
  marginBottom: "10px",
};

const paragraph = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  textAlign: "left" as const,
  whiteSpace: "pre-wrap",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  textAlign: "center" as const,
  marginTop: "20px",
};

const link = {
  color: "#2754C5",
  textDecoration: "underline",
  fontSize: "14px",
};
