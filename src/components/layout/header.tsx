"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";

import { ArrowUpRightIcon, ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/icons/pack";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { navLinks, routes } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > prev && y > 400 && !open);
  });

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300",
          scrolled
            ? "bg-background/85 py-3 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "py-4 sm:py-6",
        )}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex xl:gap-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="group relative">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 rounded-full px-4 py-2 font-heading text-[17px] transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ChevronDownIcon className="size-4 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute top-full left-1/2 w-56 -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-2xl border border-border bg-card p-2 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-xl px-4 py-2.5 text-[15px] transition-colors hover:bg-primary/8 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative rounded-full px-4 py-2 font-heading text-[17px] transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:inline-flex">
              <Link href={routes.book}>
                Book A Space <ArrowUpRightIcon className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => (open ? close() : setOpen(true))}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-background lg:hidden"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.nav
              className="container-x flex h-full flex-col pt-28 pb-10"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  className="border-b border-border"
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                >
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setExpanded(expanded === link.label ? null : link.label)}
                        className="flex w-full items-center justify-between py-4 font-heading text-2xl"
                      >
                        {link.label}
                        <ChevronDownIcon
                          className={cn("size-5 transition-transform", expanded === link.label && "rotate-180")}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {expanded === link.label && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 pb-4">
                              {link.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={close}
                                  className="py-1.5 text-lg text-muted"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={link.href} onClick={close} className="block py-4 font-heading text-2xl">
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                className="mt-auto"
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              >
                <Button asChild size="lg" className="w-full">
                  <Link href={routes.book} onClick={close}>
                    Book A Space <ArrowUpRightIcon />
                  </Link>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
