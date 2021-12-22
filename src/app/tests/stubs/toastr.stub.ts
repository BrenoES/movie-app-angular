import { IndividualConfig } from 'ngx-toastr';

const ToastrServiceStub = {
  success: (
    message?: string,
    title?: string,
    override?: Partial<IndividualConfig>
  ) => {
    console.log(message, title, override);
  },
  error: (
    message?: string,
    title?: string,
    override?: Partial<IndividualConfig>
  ) => {
    console.log(message, title, override);
  },
};

export { ToastrServiceStub };
