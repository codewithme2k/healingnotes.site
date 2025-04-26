import { Twemoji } from "@/components/ui/twemoji";

export function Intro() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I&lsquo;m <span className="font-medium">Quoc Huu Doan</span> - Doctor –
      the one with a mission to heal
      <span className="hidden font-medium">Viet Nam</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-vietnam" />
      </span>
    </h1>
  );
}
