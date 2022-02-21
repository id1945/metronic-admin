export const example1Html = `<input
    v-model="value"
    type="text"
    class="form-control form-control-solid"
    id="example1VeeValidate"
    placeholder="Interact with this field"
/>
<span class="text-danger">{{ errorMessage }}</span>`;

export const example1Js = `setup() {
    const isRequired = value => {
      if (value && value.trim()) {
        return true;
      }

      return "This is required";
    };

    const { errorMessage, value } = useField("fieldName", isRequired);

    return {
      errorMessage,
      value
    };
  }`;

export const example2Html = `<input
    v-model="value"
    type="text"
    class="form-control form-control-solid"
    id="example1VeeValidate"
    placeholder="Interact with this field"
/>
<span class="text-danger">{{ errorMessage }}</span>`;

export const example2Js = `setup() {
    const { errorMessage, value } = useField(
      "fieldName",
      yup
        .string()
        .required()
        .min(8)
    );

    return {
      value,
      errorMessage
    };
  }`;

export const example3Html = `<div class="mb-10">
  <label for="emailField" class="form-label">Email address</label>
  <input
    type="email"
    name="email"
    v-model="email"
    class="form-control form-control-solid"
    id="emailField"
    placeholder="email"
  />
  <span class="text-danger">{{ emailError }}</span>
</div>

<label for="passwordField" class="form-label">Password</label>
<input
  type="password"
  name="password"
  v-model="password"
  class="form-control form-control-solid"
  id="passwordField"
  placeholder="password"
/>
<span class="text-danger">{{ passwordError }}</span>`;

export const example3Js = `setup() {
    // Define a validation schema
    const simpleSchema = {
      email(value) {
        // validate email value and return messages...
      },
      password(value) {
        // validate name value and return messages...
      },
    };

    // Create a form context with the validation schema
    useForm({
      validationSchema: simpleSchema,
    });

    // No need to define rules for fields
    const { value: email, errorMessage: emailError } = useField('email');
    const { value: password, errorMessage: passwordError } = useField('password');

    return {
      email,
      emailError,
      password,
      passwordError,
    };
  }`;

export const example4Js1 = `const schema = yup.object({
  email: yup.string().required().email(),
  name: yup.string().required(),
  password: yup.string().required().min(8),
});`;

export const example4Html = `<div class="mb-10">
  <label for="emailField" class="form-label">Email address</label>
  <input
    type="email"
    name="email"
    v-model="email"
    class="form-control form-control-solid"
    id="emailField"
    placeholder="email"
  />
  <span class="text-danger">{{ emailError }}</span>
</div>

<label for="passwordField" class="form-label">Password</label>
<input
  type="password"
  name="password"
  v-model="password"
  class="form-control form-control-solid"
  id="passwordField"
  placeholder="password"
/>
<span class="text-danger">{{ passwordError }}</span>`;

export const example4Js2 = `setup() {
    // Define a validation schema
    const schema = yup.object({
      email: yup
        .string()
        .required()
        .email(),
      password: yup
        .string()
        .required()
        .min(8)
    });

    // Create a form context with the validation schema
    useForm({
      validationSchema: schema
    });

    // No need to define rules for fields
    const { value: email, errorMessage: emailError } = useField("email");
    const { value: password, errorMessage: passwordError } = useField(
      "password"
    );

    return {
      email,
      emailError,
      password,
      passwordError
    };
  }`;

export const example5Html = ``;

export const example5Js = ``;
