import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import { materialRenderers } from "@jsonforms/material-renderers";
import { Button, Container, Typography, Paper } from "@mui/material";

interface FormData {
  name?: string;
  age?: number;
  email?: string;
}

//JSON SCHEMA
const schema = {
  type: "object",
  properties: {
    name: { type: "string", title: "Full Name" },
    age: { type: "integer", title: "Age", minimum: 18 },
    email: { type: "string", format: "email", title: "Email" },
  },
  required: ["name", "email"],
};

//UI SCHEMA
const uischema = {
  type: "VerticalLayout",
  elements: [
    { type: "Control", scope: "#/properties/name" },
    { type: "Control", scope: "#/properties/age" },
    { type: "Control", scope: "#/properties/email" },
  ],
};

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({});

  const handleSubmit = () => {
    alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <Container maxWidth="md" sx={{ width: "600px" }}>
      <Paper style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h5" gutterBottom>
          Form using JSON Schema
        </Typography>

        <JsonForms
          schema={schema}
          uischema={uischema}
          data={formData}
          renderers={materialRenderers}
          onChange={({ data }) => setFormData(data)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 20 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>
    </Container>
  );
};

export default FormComponent;
