import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import GoogleLogin from "./google-login";

const loginSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  phone: yup.number().typeError('Phone must be a number').max(9999999999999, 'Phone number is too long').required('Phone is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver:yupResolver(loginSchema),
  })

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 pt-6 pb-8 bg-white w-[460px]"
        >
          <h1 className="text-2xl md:text-3xl xl:text-4xl mb-5 font-bold leading-9 text-[#6148FF]">
            Daftar
          </h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 font-Poppins text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
            >
              Nama
            </label>
            <input
              {...register("name")}
              className="w-full px-3 py-2 text-sm lg:text-base leading-tight border shadow font-Poppins text-[#3C3C3C] appearance-none rounded-2xl focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              id="name"
              placeholder="Nama Lengkap"
            />
            <span className="text-red-500">{errors.name?.message}</span>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-Poppins text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
            >
              Email
            </label>
            <input
              {...register("email")}
              className="w-full px-3 text-sm lg:text-base py-2 leading-tight font-Poppins text-[#3C3C3C] border rounded-2xl shadow appearance-none focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              placeholder="Contoh: johndoe@gmail.com"
            />
            <span className="text-red-500">{errors.email?.message}</span>
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block mb-2 font-Poppins text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
            >
              Nomor Telpon
            </label>
            <input
              {...register("phone")}
              className="w-full px-3 py-2 text-sm lg:text-base leading-tight font-Poppins text-[#3C3C3C] border rounded-2xl shadow appearance-none focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
              name="phone"
              min={1}
              max={13}
              id="phone"
              placeholder="+62"
            />
            <span className="text-red-500">{errors.phone?.message}</span>
          </div>
          <div className="mb-8">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block mb-2 font-Poppins text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base"
                >
                  Buat Password
                </label>
              </div>
              <input
                {...register("password")}
                type="password"
                name="password"
                id="password"
                placeholder="Buat Password"
                className="w-full px-3 py-2 text-sm lg:text-base leading-tight font-Poppins text-[#3C3C3C] border rounded-2xl shadow appearance-none focus:border-slate-400 border-slate-300 focus:outline-none focus:shadow-outline"
              />
              <span className="text-red-500">{errors.password?.message}</span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full font-Poppins bg-[#6148FF] text-white hover:bg-[#4532bd] focus:ring-4 focus:outline-none lg:text-base rounded-2xl text-sm px-3 py-2 flex items-center justify-center gap-1"
          >
            Daftar
          </button>
          <div className="text-center">
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400 font-Poppins">
                or
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="flex justify-center">
              <GoogleLogin buttonText={"Sign in with Google"} />
            </div>
            <p className="text-sm font-normal text-center font-Poppins lg:text-base">
              Sudah punya akun?
              <a
                href="/login"
                className="font-bold text-[#6148FF] hover:underline"
              >
                Masuk di sini
              </a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default RegisterForm
