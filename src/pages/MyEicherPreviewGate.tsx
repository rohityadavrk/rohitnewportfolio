import { useState, type FormEvent, type ReactNode } from "react";

const previewPassword = "12345678";

export default function MyEicherPreviewGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const password = new FormData(event.currentTarget).get("password");

    if (password === previewPassword) {
      setUnlocked(true);
    } else {
      setError(true);
    }
  }

  if (unlocked) return children;

  return (
    <section aria-labelledby="my-eicher-preview-heading" className="mx-auto my-10 max-w-md rounded-2xl border border-line bg-white p-6 shadow-surface sm:my-16 sm:p-8">
      <h1 id="my-eicher-preview-heading" className="text-3xl font-bold tracking-tight text-ink">My Eicher</h1>
      <p className="mt-2 leading-relaxed text-muted">Enter the password to open the case study.</p>

      <form onSubmit={unlock} className="mt-6">
        <label htmlFor="my-eicher-password" className="block text-sm font-semibold text-ink">Password</label>
        <input
          id="my-eicher-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          aria-invalid={error}
          aria-describedby={error ? "my-eicher-password-error" : undefined}
          onChange={() => setError(false)}
          className="mt-2 block w-full rounded-lg border border-line-strong px-3 py-2.5 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />
        {error && <p id="my-eicher-password-error" role="alert" className="mt-2 text-sm text-[#a31c1c]">Incorrect password. Try again.</p>}
        <button type="submit" className="mt-4 w-full rounded-lg bg-accent px-4 py-2.5 font-semibold text-white hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
          Open case study
        </button>
      </form>
    </section>
  );
}
