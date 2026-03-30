"use client"

import { useState } from "react"

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually")

  const pricing = {
    starter: {
      monthly: 15,
      annually: 200,
    },
    professional: {
      monthly: 80,
      annually: 1000,
    },
    enterprise: {
      monthly: 500,
      annually: 2000,
    },
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-border flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          {/* Pricing Badge */}
          <div className="px-[14px] py-[6px] bg-background shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-border shadow-xs">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-foreground text-xs font-medium leading-3 font-sans">
              Plans & Pricing
            </div>
          </div>

          {/* Title */}
          <div className="self-stretch text-center flex justify-center flex-col text-foreground text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Simple, transparent pricing for Instagram growth
          </div>

          {/* Description */}
          <div className="self-stretch text-center text-muted-foreground text-base font-normal leading-7 font-sans">
            Start for free and scale your Instagram presence with tools built for creators and brands.
            <br />
            Upgrade when you're ready to unlock advanced features.
          </div>
        </div>
      </div>

      {/* Security & Trust Badges */}
      <div className="self-stretch px-6 md:px-16 py-6 bg-muted/30 border-b border-border flex justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            SSL Secure
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.372a3.066 3.066 0 01-2.812 3.062 3.066 3.066 0 01-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 01-1.745-.723 3.066 3.066 0 01-2.812-3.062V6.517a3.066 3.066 0 012.812-3.062zm7.958 5.28a.75.75 0 00-1.064-1.06L9 10.893 7.854 9.747a.75.75 0 10-1.06 1.061l1.5 1.5a.75.75 0 001.06 0l3.462-3.461z" clipRule="evenodd" />
            </svg>
            PCI Compliant
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5H5.625A1.625 1.625 0 004 3.125v13.75A1.625 1.625 0 005.625 18.5h8.75a1.625 1.625 0 001.625-1.625V6.5m-11-5v3.75m7.5-3.75v3.75M4.5 9.5h11" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            Secure Payments by Stripe
          </div>
        </div>
      </div>

      {/* Billing Toggle Section */}
      <div className="self-stretch px-6 md:px-16 py-9 relative flex justify-center items-center gap-4">
        {/* Horizontal line */}
        <div className="w-full max-w-[1060px] h-0 absolute left-1/2 transform -translate-x-1/2 top-[63px] border-t border-border z-0"></div>

        {/* Toggle Container */}
        <div className="p-3 relative bg-muted border border-border/50 backdrop-blur-[44px] backdrop-saturate-150 backdrop-brightness-110 flex justify-center items-center rounded-lg z-20 before:absolute before:inset-0 before:bg-background before:opacity-60 before:rounded-lg before:-z-10">
          <div className="p-[2px] bg-muted/50 shadow-[0px_1px_0px_hsl(var(--background))] rounded-[99px] border-[0.5px] border-border flex justify-center items-center gap-[2px] relative">
            <div
              className={`absolute top-[2px] w-[calc(50%-1px)] h-[calc(100%-4px)] bg-background shadow-[0px_2px_4px_rgba(0,0,0,0.08)] rounded-[99px] transition-all duration-300 ease-in-out ${
                billingPeriod === "annually" ? "left-[2px]" : "right-[2px]"
              }`}
            />

            <button
              onClick={() => setBillingPeriod("annually")}
              className="px-4 py-1 rounded-[99px] flex justify-center items-center gap-2 transition-colors duration-300 relative z-10 flex-1"
            >
              <div
                className={`text-[13px] font-medium leading-5 font-sans transition-colors duration-300 ${
                  billingPeriod === "annually" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Annually
              </div>
            </button>

            <button
              onClick={() => setBillingPeriod("monthly")}
              className="px-4 py-1 rounded-[99px] flex justify-center items-center gap-2 transition-colors duration-300 relative z-10 flex-1"
            >
              <div
                className={`text-[13px] font-medium leading-5 font-sans transition-colors duration-300 ${
                  billingPeriod === "monthly" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Monthly
              </div>
            </button>
          </div>

          {/* Decorative dots */}
          <div className="w-[3px] h-[3px] absolute left-[5px] top-[5.25px] bg-muted/50 shadow-[0px_0px_0.5px_rgba(0,0,0,0.12)] rounded-[99px]"></div>
          <div className="w-[3px] h-[3px] absolute right-[5px] top-[5.25px] bg-muted/50 shadow-[0px_0px_0.5px_rgba(0,0,0,0.12)] rounded-[99px]"></div>
          <div className="w-[3px] h-[3px] absolute left-[5px] bottom-[5.25px] bg-muted/50 shadow-[0px_0px_0.5px_rgba(0,0,0,0.12)] rounded-[99px]"></div>
          <div className="w-[3px] h-[3px] absolute right-[5px] bottom-[5.25px] bg-muted/50 shadow-[0px_0px_0.5px_rgba(0,0,0,0.12)] rounded-[99px]"></div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="self-stretch border-b border-t border-border flex justify-center items-center">
        <div className="flex justify-center items-start w-full">
          {/* Left Decorative Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-border outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>

          {/* Pricing Cards Container */}
          <div className="flex-1 flex flex-col md:flex-row justify-center items-center gap-6 py-12 md:py-0">
            {/* Starter Plan */}
            <div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 border border-border overflow-hidden flex flex-col justify-start items-start gap-12 bg-background">
              {/* Plan Header */}
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-foreground text-lg font-medium leading-7 font-sans">Starter</div>
                  <div className="w-full max-w-[242px] text-muted-foreground text-sm font-normal leading-5 font-sans">
                    Perfect for solo creators exploring Instagram automation.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-foreground text-5xl font-medium leading-[60px] font-serif">
                      <span className="invisible">£{pricing.starter[billingPeriod]}</span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "annually" ? 1 : 0,
                          transform: `scale(${billingPeriod === "annually" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "annually" ? 0 : 4}px)`,
                        }}
                        aria-hidden={billingPeriod !== "annually"}
                      >
                        £{pricing.starter.annually}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "monthly" ? 1 : 0,
                          transform: `scale(${billingPeriod === "monthly" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "monthly" ? 0 : 4}px)`,
                        }}
                        aria-hidden={billingPeriod !== "monthly"}
                      >
                        £{pricing.starter.monthly}
                      </span>
                    </div>
                    <div className="text-muted-foreground text-sm font-medium font-sans">
                      per {billingPeriod === "monthly" ? "month" : "year"}
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-4 py-[10px] relative bg-primary shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center">
                  <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="max-w-[108px] flex justify-center flex-col text-primary-foreground text-[13px] font-medium leading-5 font-sans">
                    Start for free
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">No credit card required</p>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[
                  "Up to 5 posts scheduled",
                  "Basic analytics",
                  "1 Instagram account",
                  "Community support",
                  "Monthly insights",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
                    <div className="w-4 h-4 relative flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-foreground/80 text-[12.5px] font-normal leading-5 font-sans">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Plan (Featured) */}
            <div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 bg-primary border border-border overflow-hidden flex flex-col justify-start items-start gap-12">
              {/* Plan Header */}
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-primary-foreground text-lg font-medium leading-7 font-sans">Professional</div>
                  <div className="w-full max-w-[242px] text-primary-foreground/70 text-sm font-normal leading-5 font-sans">
                    Advanced features for growing brands and content creators.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-primary-foreground text-5xl font-medium leading-[60px] font-serif">
                      <span className="invisible">£{pricing.professional[billingPeriod]}</span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "annually" ? 1 : 0,
                          transform: `scale(${billingPeriod === "annually" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "annually" ? 0 : 4}px)`,
                        }}
                        aria-hidden={billingPeriod !== "annually"}
                      >
                        £{pricing.professional.annually}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "monthly" ? 1 : 0,
                          transform: `scale(${billingPeriod === "monthly" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "monthly" ? 0 : 4}px)`,
                        }}
                        aria-hidden={billingPeriod !== "monthly"}
                      >
                        £{pricing.professional.monthly}
                      </span>
                    </div>
                    <div className="text-primary-foreground/80 text-sm font-medium font-sans">
                      per {billingPeriod === "monthly" ? "month" : "year"}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="self-stretch px-4 py-[10px] relative bg-background shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center">
                  <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="max-w-[108px] flex justify-center flex-col text-primary text-[13px] font-medium leading-5 font-sans">
                    Get started
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">Billed annually, cancel anytime</p>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[
                  "Unlimited posts scheduled",
                  "Advanced analytics & insights",
                  "Up to 3 Instagram accounts",
                  "Priority support",
                  "Best posting times",
                  "Hashtag recommendations",
                  "Engagement metrics",
                  "Monthly reports",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
                    <div className="w-4 h-4 relative flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-primary-foreground text-[12.5px] font-normal leading-5 font-sans">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 bg-background border border-border overflow-hidden flex flex-col justify-start items-start gap-12">
              {/* Plan Header */}
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-foreground text-lg font-medium leading-7 font-sans">Enterprise</div>
                  <div className="w-full max-w-[242px] text-muted-foreground text-sm font-normal leading-5 font-sans">
                    Complete solution for agencies and large organizations.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-foreground text-5xl font-medium leading-[60px] font-serif">
                      <span className="invisible">£{pricing.enterprise[billingPeriod]}</span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "annually" ? 1 : 0,
                          transform: `scale(${billingPeriod === "annually" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "annually" ? 0 : 4}px)`,
                        }}
                        aria-hidden={billingPeriod !== "annually"}
                      >
                        £{pricing.enterprise.annually}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "monthly" ? 1 : 0,
                          transform: `scale(${billingPeriod === "monthly" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "monthly" ? 0 : 4}px)`,
                        }}
                        aria-hidden={billingPeriod !== "monthly"}
                      >
                        £{pricing.enterprise.monthly}
                      </span>
                    </div>
                    <div className="text-muted-foreground text-sm font-medium font-sans">
                      per {billingPeriod === "monthly" ? "month" : "year"}
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-4 py-[10px] relative bg-primary shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center">
                  <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="max-w-[108px] flex justify-center flex-col text-primary-foreground text-[13px] font-medium leading-5 font-sans">
                    Contact sales
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">Custom billing available</p>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[
                  "Everything in Professional",
                  "Unlimited Instagram accounts",
                  "Dedicated account manager",
                  "Team collaboration tools",
                  "Custom scheduling",
                  "API access",
                  "Advanced competitor analysis",
                  "White-label options",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
                    <div className="w-4 h-4 relative flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-foreground/80 text-[12.5px] font-normal leading-5 font-sans">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Decorative Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-border outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
