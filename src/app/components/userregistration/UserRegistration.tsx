import { FieldPath, SubmitHandler, useForm } from 'react-hook-form';
import { ErrorAlert } from 'app/common/components/stateless/alerts/ErrorAlert';
import { SubmitButton } from 'app/common/components/stateless/buttons/SubmitButton';
import { TextInput, TextInputProps } from 'app/common/components/stateless/input/TextInput';
import { createControlledFormInput } from 'app/common/components/stateless/input/factories/createControlledFormInput';
import { useUserStore } from 'app/stores/userStore';
import { tw } from 'app/utils/tw';
import { UserSchema, defaultValues, resolver } from './userSchema';

const ControlledFormTextInput = createControlledFormInput<TextInputProps, UserSchema>(TextInput, {
  maxLength: 128,
  required: true
});

export const UserRegistration = () => {
  const error = useUserStore((store) => store.error);
  const registerUser = useUserStore((store) => store.actions.registerUser);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset: resetForm
  } = useForm<UserSchema>({ defaultValues, resolver });

  const onSubmit: SubmitHandler<UserSchema> = async (user) => {
    const userWasRegistered = await registerUser(user);

    if (userWasRegistered) {
      resetForm();
    }
  };

  const createTextInput = (name: FieldPath<UserSchema>) => (
    <ControlledFormTextInput control={control} errors={errors} name={name} />
  );

  const classes = {
    inline: tw`flex gap-5`
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={classes.inline}>
        {createTextInput('firstName')}
        {createTextInput('lastName')}
      </fieldset>
      {createTextInput('streetAddress')}
      <fieldset className={classes.inline}>
        {createTextInput('zipCode')}
        {createTextInput('city')}
      </fieldset>
      {createTextInput('email')}
      {createTextInput('phoneNumber')}
      <SubmitButton className="mt-7">Register</SubmitButton>
      {error && <ErrorAlert className="mt-7">Registration failed. Please try again.</ErrorAlert>}
    </form>
  );
};
