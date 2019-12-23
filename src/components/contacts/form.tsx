import React from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import { Plane } from '../icons';
interface ContactForm {
  name: string;
  email: string;
  subject: string;
  body: string;
}

const ContactForm: React.FC<InjectedFormProps<ContactForm>> = ({
  handleSubmit,
  submitting
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row mb-4">
        <label className="formLabel col-md-4 mb-2 mb-md-2">
          件名<span className="formLabel__tips">必須</span>
        </label>

        <Field
          name="type"
          component="select"
          className="form-control form-control-lg col-md-8"
        >
          <option value="lease">ユニフォームリースについて</option>
          <option value="sewing">縫製・販売について</option>
          <option value="linensupply">リネンサプライについて</option>
          <option value="other">その他</option>
        </Field>
      </div>

      <div className="form-row mb-4">
        <label className="formLabel col-md-4 mb-2 mb-md-2">
          お名前<span className="formLabel__tips">必須</span>
        </label>

        <Field
          name="name"
          component="input"
          type="text"
          placeholder="お名前"
          className="form-control form-control-lg col-md-8"
        />
      </div>
      <div className="form-row mb-4">
        <label className="formLabel col-md-4 mb-2 mb-md-2">
          Email<span className="formLabel__tips">必須</span>
        </label>
        <Field
          name="email"
          component="input"
          type="text"
          placeholder="返信先のメールアドレス"
          className="form-control form-control-lg col-md-8"
        />
      </div>
      <div className="form-row">
        <label className="formLabel col-md-4 mb-2 mb-md-2">
          お問い合わせ内容<span className="formLabel__tips">必須</span>
        </label>
        <Field
          name="body"
          component="textarea"
          type="textarea"
          rows="5"
          placeholder="お問い合わせ内容"
          className="form-control form-control-lg col-md-8"
        />
      </div>

      <div className="formFooter">
        <button
          className="btn btn-black btn-lg formFooter__submit"
          type="submit"
        >
          <Plane fill="#fff" />
          送信する
        </button>
      </div>
    </form>
  );
};

export default reduxForm<ContactForm>({
  form: 'contactForm'
})(ContactForm);
