import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "start" | "center";
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
  children?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "start",
  className = "",
  titleClassName = "",
  bodyClassName = "",
  children,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={[
        "partner-heading",
        isCentered ? "partner-heading--center" : "partner-heading--start",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={["partner-eyebrow", isCentered ? "partner-eyebrow--center" : ""].filter(Boolean).join(" ")}>
        {eyebrow}
      </div>

      <h2 className={["partner-heading__title", titleClassName].filter(Boolean).join(" ")}>
        {title}
      </h2>

      {body ? (
        <p
          className={[
            "partner-heading__body",
            isCentered ? "partner-heading__body--center" : "",
            bodyClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {body}
        </p>
      ) : null}

      {children ? <div className={isCentered ? "partner-heading__meta partner-heading__meta--center" : "partner-heading__meta"}>{children}</div> : null}
    </div>
  );
}
