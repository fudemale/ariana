# Stripe Manual Review Checklist - ArianaInsta

**Prepared for:** Founder only  
**Purpose:** Pre-submission checklist items that require human verification  
**Last Updated:** March 2026

---

## Phase 1: Legal Entity Consistency (FOUNDER ACTION REQUIRED)

### ✅ Checklist Items:

- [ ] **UK Company Registration**
  - Verify FalkTech LTD is registered at Companies House
  - Obtain: Company Number (e.g., 12345678)
  - Obtain: Registered Address (full address with postcode)
  - Obtain: Director names and dates of birth
  - **Status:** Currently missing from site  
  - **Action:** Fill in footer placeholders before Stripe submission  
  - **Timeline:** 1-2 weeks (Companies House records)

- [ ] **VAT Registration** (if applicable)
  - Check if FalkTech LTD is VAT registered
  - If yes: obtain VAT number (GB followed by 9 digits)
  - If no: confirm exemption reason
  - **Why Stripe needs this:** Tax compliance verification
  - **Status:** NOT YET VERIFIED
  - **Action:** Provide to Stripe during account application

- [ ] **Trading Name Consistency**
  - Company Name on registration: FalkTech LTD ✅
  - Trading Name: ArianaInsta ✅
  - Must declare trading name to Stripe
  - **Why:** Prevent fraud/money laundering concerns
  - **Status:** Ready

- [ ] **Beneficial Owner Information**
  - Stripe will ask who owns the company
  - Prepare: Name, DOB, address of beneficial owner(s)
  - Prepare: Ownership percentage breakdown
  - **Status:** PENDING

---

## Phase 2: Support Email Readiness (FOUNDER ACTION REQUIRED)

### ✅ Checklist Items:

- [ ] **support@arianainsta.com Active**
  - Email must be active and monitored
  - **Why Stripe needs this:** Customer disputes resolution
  - **Test:** Send test email, verify response within 48 hours
  - **Status:** EMAIL ADDRESS LISTED on site  
  - **Action:** VERIFY IT WORKS before submission
  - **Timeline:** 1 day (send test email)

- [ ] **Response Time SLA**
  - Site claims: "24-48 business hours"
  - **Action needed:** Ensure this is realistic and documented
  - Set up escalation if emails stack up
  - Have backup person if away
  - **Status:** SLA declared but not tested
  - **Timeline:** Establish before going live

- [ ] **Support Process Documentation**
  - How will refund requests be handled?
  - Who approves? (recommended: <7 days)
  - How are chargebacks disputed?
  - Document & save for Stripe audit
  - **Status:** NOT YET DOCUMENTED
  - **Timeline:** 1-2 weeks (create SOP)

- [ ] **Dispute & Refund Handling**
  - Set up internal process for refund approvals
  - Document decision criteria (see Refund Policy)
  - Plan: How to handle chargebacks?
  - Stripe will ask for evidence (email chains, etc.)
  - **Status:** Policy exists, process not documented
  - **Timeline:** 1-2 weeks (create SOP)

---

## Phase 3: Refund Handling Process (FOUNDER ACTION REQUIRED)

### ✅ Checklist Items:

- [ ] **Refund Policy Alignment**
  - Site states: "14-day refund window"
  - **Verification needed:** Is this actually implemented?
  - Who processes refunds? (e.g., yourself, Stripe)
  - What's the approval workflow?
  - **Status:** Policy written, process not confirmed
  - **Timeline:** 1-2 weeks (set up process)

- [ ] **Refund Processing Timeline**
  - Site states: "5-10 business days"
  - **Action needed:** Confirm this is realistic
  - Set up automated refund tool or manual reminder
  - Document: Who checks for refund requests daily?
  - **Status:** Timeline stated, process not documented
  - **Timeline:** Immediate (set up daily check)

- [ ] **Refund Dispute Evidence**
  - Stripe may charge back if customer disputes refund
  - Save: All customer emails requesting refunds
  - Save: Your approval/denial reasoning
  - Save: Screenshots of account usage (if relevant)
  - **Status:** NOT YET SET UP
  - **Timeline:** 1 week (create folder/system)

- [ ] **"Excessive Usage" Clause Testing**
  - Refund policy mentions: "not utilized service excessively"
  - **Action needed:** Define "excessive" (e.g., >50 scheduled posts?)
  - Document decision criteria
  - **Status:** Criteria not defined
  - **Timeline:** 1 week (define thresholds)

---

## Phase 4: Service Delivery Evidence (FOUNDER ACTION REQUIRED)

### ✅ Checklist Items:

- [ ] **Product Actually Works**
  - Stripe will test the platform
  - Create test account with Stripe's test card
  - Verify: Can schedule a post?
  - Verify: Do analytics display?
  - Verify: Can cancel subscription?
  - **Status:** [FOUNDER RESPONSIBILITY: Verify]
  - **Timeline:** Immediate (do before submission)

- [ ] **Cancellation Actually Works**
  - Customer should be able to cancel via dashboard
  - OR via support email (support@arianainsta.com)
  - Test: Does cancellation stop recurring charges?
  - **Status:** [FOUNDER RESPONSIBILITY: Verify]
  - **Timeline:** Immediate

- [ ] **No Hidden Terms or Gotchas**
  - Stripe audits Terms of Service
  - Flag any: Loopholes, confusing language, hidden fees
  - Review: Do Terms match actual product?
  - **Status:** [FOUNDER RESPONSIBILITY: Review]
  - **Timeline:** 2-3 days

- [ ] **Instagram OAuth Integration Verified**
  - Is Instagram connection working?
  - Do users actually connect successfully?
  - Any error messages to fix?
  - **Status:** [FOUNDER RESPONSIBILITY: Verify]
  - **Timeline:** Immediate

---

## Phase 5: Statement Descriptor Clarity (FOUNDER + STRIPE ACTION)

### ✅ Checklist Items:

- [ ] **Stripe Billing Statement Name**
  - What will appear on customer credit card statements?
  - Current: Must match company name or trading name
  - Recommendation: "FalkTech ArianaInsta"
  - **Why:** Reduces chargebacks from "unrecognized charge"
  - **Status:** NOT YET SET UP IN STRIPE
  - **Action:** Configure in Stripe Account Settings > Business Details
  - **Timeline:** 1 day (when Stripe account is ready)

- [ ] **Statement Descriptor on Website**
  - Added to Contact Page: ✅ (DONE)
  - "Your credit card statement will show charges from FalkTech LTD for ArianaInsta subscription"
  - Customers know what to expect
  - **Status:** ✅ IMPLEMENTED
  - **Timeline:** Complete

---

## Phase 6: Business Model Consistency (FOUNDER DECISION)

### ✅ Critical Questions:

- [ ] **What exactly are you selling?**
  
  **Option A: Pure SaaS** (Current positioning)
  \`\`\`
  ✅ ArianaInsta software access only
  ✅ Customers control their own Instagram
  ✅ No content creation by FalkTech
  ✅ No password sharing
  \`\`\`
  
  **Option B: Managed Service** (Alternative)
  \`\`\`
  FalkTech logs into customer accounts
  FalkTech creates/schedules content
  FalkTech has account control
  ❌ NOT compatible with current Stripe Terms
  ❌ Requires separate service agreement
  \`\`\`
  
  **Option C: Hybrid** (Mixed)
  \`\`\`
  Some customers: Pure SaaS (Option A)
  Some customers: Managed service (Option B)
  ❌ Risky for Stripe
  ❌ May trigger account suspension
  \`\`\`

- **Action Required:** Confirm which model applies
- **Decision Impact:** Determines Stripe setup, refund policy, terms

- [ ] **Do you currently offer managed services?**
  - If YES: Document separately from SaaS offering
  - If NO: Confirm in writing for Stripe
  - If PLAN TO: Stripe may require separate account

---

## Phase 7: Stripe Account Setup Readiness (FOUNDER ACTION)

### ✅ Checklist Items:

- [ ] **Stripe Test Mode Works**
  - Stripe will give you test API keys
  - Test: Can you charge test card?
  - Test: Can you process refunds?
  - Test: Do webhooks fire correctly?
  - **Status:** NOT YET STARTED
  - **Timeline:** 2-3 days (when Stripe approves account)

- [ ] **Webhook Handlers Configured**
  - Stripe sends events (payment, refund, dispute, etc.)
  - Your backend must handle these correctly
  - Test: Dispute webhook received?
  - Test: Refund webhook processed?
  - **Status:** NOT YET STARTED
  - **Timeline:** 3-5 days (backend work)

- [ ] **Chargeback & Dispute Process**
  - How will you defend chargebacks?
  - What evidence do you have? (email, IP, usage)
  - Stripe will ask for evidence within 7 days
  - **Status:** NOT YET DOCUMENTED
  - **Timeline:** 1 week (create SOP)

- [ ] **Payout Account Configured**
  - Where will Stripe send your money?
  - Verify: UK Bank Account linked to FalkTech LTD?
  - Or: Paypal account for FalkTech LTD?
  - **Status:** NOT YET STARTED
  - **Timeline:** 1 day (add bank details to Stripe)

---

## Phase 8: Pre-Launch Testing (FOUNDER ACTION REQUIRED)

### ✅ End-to-End Test Scenarios:

- [ ] **Scenario 1: Successful Subscription**
  - Sign up as new user
  - Enter test card (4242 4242 4242 4242)
  - Verify: Charge processed?
  - Verify: Email confirmation sent?
  - Verify: Access granted to dashboard?
  - **Timeline:** 1 hour

- [ ] **Scenario 2: Refund Request**
  - Email support@arianainsta.com with refund request
  - Verify: Response within 48 hours?
  - Verify: Refund approved/denied with explanation?
  - Verify: Refund processed to card?
  - **Timeline:** 5-10 business days

- [ ] **Scenario 3: Cancellation**
  - Log in as customer
  - Find cancellation option in dashboard
  - Verify: Subscription stops at next billing date?
  - Verify: No surprise charges?
  - **Timeline:** 1 month (verify for next cycle)

- [ ] **Scenario 4: Chargeback Handling**
  - Simulate customer filing chargeback
  - Verify: Stripe notifies you?
  - Verify: You can upload evidence?
  - **Timeline:** N/A (for Stripe awareness)

---

## Phase 9: Documentation for Stripe Submission

### ✅ Prepare These Documents:

- [ ] **Articles of Association**
  - Download from Companies House
  - Shows: Company structure, shareholder info
  - **Timeline:** 1 day

- [ ] **Proof of Address**
  - For company: Utility bill or bank statement in company name
  - For beneficial owner: ID + address proof
  - **Timeline:** 1-2 days (gather)

- [ ] **Director Information**
  - Name, DOB, nationality, address
  - Stripe will verify against Companies House
  - **Timeline:** Already available

- [ ] **Business Description**
  - What does ArianaInsta do? (1-2 paragraphs)
  - Who are customers? (creators, small businesses, etc.)
  - What problem does it solve?
  - **Timeline:** 1 day (write)

- [ ] **Monthly Transaction Volume Estimate**
  - How many transactions/month do you expect?
  - First month: Probably 5-20 transactions
  - Growth projection: Month 1-6
  - **Timeline:** Immediate (estimate)

- [ ] **Links to Online Presence**
  - Website: arianainsta.com
  - Social media: Twitter, LinkedIn, etc.
  - **Timeline:** Immediate

---

## Phase 10: Compliance & Legal (FOUNDER + LEGAL REVIEW)

### ✅ Checklist Items:

- [ ] **Terms of Service Review**
  - Have a lawyer review (especially UK/EU law)
  - Check: GDPR compliance language
  - Check: Subscription + auto-renewal disclosures
  - **Status:** Terms created, legal review pending
  - **Timeline:** 1-2 weeks (legal review)

- [ ] **Privacy Policy Review**
  - Check: GDPR Data Processing Addendum (DPA)
  - Check: Instagram data handling claims
  - Check: Cookie policy (if applicable)
  - **Status:** Privacy created, legal review pending
  - **Timeline:** 1-2 weeks (legal review)

- [ ] **Age Verification**
  - Instagram users must be 13+
  - Do you verify customer age?
  - **Status:** NOT YET ADDRESSED
  - **Timeline:** 1-2 days (if needed)

- [ ] **Sanctions/Restricted Countries**
  - Stripe doesn't accept: Iran, Cuba, Syria, North Korea, etc.
  - Do you restrict access from these countries?
  - **Status:** NOT YET ADDRESSED
  - **Timeline:** Implement before launch

---

## Summary: Pre-Submission Readiness

### Red Flags to Fix Before Contacting Stripe:

| Item | Status | Timeline | Risk |
|------|--------|----------|------|
| Company Number in footer | ❌ Missing | 1-2 weeks | 🔴 HIGH |
| Beneficial owner info | ❌ Missing | Immediate | 🔴 HIGH |
| Support email tested | ❌ Not verified | 1 day | 🟠 MEDIUM |
| Refund process documented | ❌ Missing | 1-2 weeks | 🟠 MEDIUM |
| Product tested end-to-end | ❌ Not done | 1 day | 🟠 MEDIUM |
| Statement descriptor set | ❌ Not configured | 1 day | 🟡 LOW |
| Legal review complete | ❌ Pending | 1-2 weeks | 🟡 LOW |

---

## Recommended Timeline to Stripe Submission

### Week 1:
- [ ] Gather company number & address (Companies House)
- [ ] Identify beneficial owner(s)
- [ ] Test support email
- [ ] End-to-end product test

### Week 2:
- [ ] Refund process SOP documented
- [ ] Chargeback evidence collection plan
- [ ] Statement descriptor name finalized
- [ ] Legal review of Terms/Privacy

### Week 3:
- [ ] Update site with company details
- [ ] Prepare Stripe submission documents
- [ ] Create business description
- [ ] Final QA testing

### Week 4:
- [ ] Submit Stripe application
- [ ] Respond to Stripe questions (expected 3-7 days)
- [ ] Account approval (1-2 weeks typical)

**Total timeline: 4-6 weeks from today**

---

## Founder Sign-Off Checklist

Before submitting to Stripe, confirm:

- [ ] ArianaInsta is currently SaaS-only (no managed services)
- [ ] All required company info is available
- [ ] Support email is monitored and working
- [ ] Refund process is documented and tested
- [ ] Product works end-to-end
- [ ] Terms of Service are reviewed by a lawyer
- [ ] No false claims on website (no guarantees of growth, viral content, etc.)
- [ ] Cancellation process is customer-friendly and straightforward
- [ ] Statement descriptor matches company/trading name
- [ ] Team is prepared to respond to Stripe inquiries

---

**Questions?** Review BUSINESS_MODEL_REVIEW.md or STRIPE_REVIEW_CHECKLIST.md for more context.
