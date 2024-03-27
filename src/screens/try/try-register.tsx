import { Link, Flex, Grid, AppBar, SafeAreaView } from "@/common/components";
//
import useTryRegister from "@/modules/TryRegister/useTryRegister";
import Styled from "@/modules/TryRegister/TryRegister.module";

export default function TryRegisterScreen() {
  const { M, register, handleSubmit, errors, isSubmitting, postUser } =
    useTryRegister();
  //
  return (
    <>
      <AppBar stack="Try Register" />
      <SafeAreaView $offwhite>
        <Styled.form onSubmit={handleSubmit(postUser)} autoComplete="off">
          {/* CONTROLS */}
          <fieldset disabled={isSubmitting}>
            <section>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="(surname first)"
                required
                {...register("name")}
              />
              {errors.name && <p>{errors.name?.message}</p>}
            </section>
            <section>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Ex. example@domain.com"
                required
                {...register("email")}
              />
              {errors.email && <p>{errors.email?.message}</p>}
            </section>
            <section>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                {...register("password")}
              />
              {errors.password && <p>{errors.password?.message}</p>}
            </section>
            <section>
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                required
                {...register("confirm_password")}
              />
              {errors.confirm_password && (
                <p>{errors.confirm_password?.message}</p>
              )}
            </section>
          </fieldset>

          {/* ACTIONS */}
          <footer>
            <button disabled={isSubmitting}>
              {isSubmitting ? "OK..." : "OK"}
            </button>
            {errors.root && <p>{errors.root?.message}</p>}
          </footer>
        </Styled.form>
      </SafeAreaView>
    </>
  );
}
