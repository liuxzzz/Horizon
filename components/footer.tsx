export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-3 text-slate-500	">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Horizon.
      </p>
      <p className="text-sm text-muted-foreground">powered by{" Next.js "}</p>
    </footer>
  );
};
