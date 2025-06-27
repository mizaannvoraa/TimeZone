"use client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

// Single banner image (desktop & mobile share the same file here)
const bannerImage = {
  src: "/assets/BannerImage.webp",
  alt: "Desktop Slide 1",
};

// Venue options based on location
const venueOptions = {
  mumbai: [
    "Xperia Mall Dombivli Mumbai",
    "Inorbit Mall Vashi Navi Mumbai",
    "Phoenix Palladium Mall Lower Parel Mumbai",
    "R Mall Thane Mumbai",
    "RCity Mall Ghatkopar Mumbai",
    "Phoenix MarketCity Mall - Level 1",
  ],
  delhi: [
    "Ambience Mall Gurgaon",
    "Ambience Mall Vasant Kunj",
    "Gaur City Mall Noida",
    "MGF Metropolitan Mall Gurgaon",
    "Pacific Mall NIT Faridabad",
    "Pacific Mall Tagore Garden",
    "Vegas Mall Delhi",
  ],
  pune:[
    "Seasons Mall Pune",
    "Phoenix Marketcity Pune",
    "Phoenix Mall of the Millennium Pune"
  ]
};

export default function BannerSlider() {
  const pathname = usePathname();
  const isMaladPage = pathname?.includes("/malad");
  // Determine initial venues based on pathname (available on server)
 const getInitialVenues = () => {
  if (pathname?.includes("/delhi")) return venueOptions.delhi;
  if (pathname?.includes("/pune")) return venueOptions.pune;
  return venueOptions.mumbai;
};


  /* ――― State & helpers ――― */
  const [currentVenues] = useState(getInitialVenues());
  const [urlParams, setUrlParams] = useState({
    utm_ad: "",
    utm_placement: "",
    gclid: "",
    fbclid: "",
    utm_source: "",
    utm_campaign: "",
    utm_keyword: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ── Extract & persist UTM parameters ──
  useEffect(() => {
    if (typeof window === "undefined") return;

    const query = new URLSearchParams(window.location.search);
    const params = {
      utm_ad: query.get("utm_ad") || "",
      utm_placement: query.get("utm_placement") || "",
      gclid: query.get("gclid") || "",
      fbclid: query.get("fbclid") || "",
      utm_source: query.get("utm_source") || "",
      utm_campaign: query.get("utm_campaign") || "",
      utm_keyword: query.get("utm_keyword") || "",
    };

    setUrlParams(params);

    // persist in localStorage
    Object.entries(params).forEach(([k, v]) => {
      if (v) localStorage.setItem(k, v);
    });
  }, []);

  // ── Formik setup ──
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      date: null,
      venue: "",
      terms: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      date: Yup.date().required("Date is required").nullable(),
venue: isMaladPage
  ? Yup.string().nullable()
  : Yup.string().required("Please select a venue"),
      terms: Yup.boolean().oneOf([true], "You must accept the terms"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);

      // Pull UTM values from state or localStorage
      const getParam = (key) =>
        urlParams[key] ||
        (typeof window !== "undefined" && localStorage.getItem(key)) ||
        "";

      const formData = {
        ...values,
        utm_ad: getParam("utm_ad"),
        utm_placement: getParam("utm_placement"),
        gclid: getParam("gclid"),
        fbclid: getParam("fbclid"),
        utm_source: getParam("utm_source"),
        utm_campaign: getParam("utm_campaign"),
        utm_keyword: getParam("utm_keyword"),
      };

      // Convert to x‑www‑form‑urlencoded for Apps Script
      const body = new URLSearchParams();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));

      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbxaBbo-AvT_8OfwcbWeSsmLno88udsW4CFQ5m6KarJKu2bvjW6rZkSp5Q0DdU5u8bgt/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: body.toString(),
          }
        );

        resetForm();
        router.push("/thank-you");
      } catch (err) {
        console.error("Error submitting form", err);
        setStatus("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setStatus(""), 3000);
      }
    },
  });
  const router = useRouter();

  return (
    <div className="relative w-full overflow-hidden">
      {/* Banner image */}
      <div className="relative w-full hidden md:block md:aspect-[21/9]">
        <Image
          src={bannerImage.src}
          alt={bannerImage.alt}
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="relative md:hidden block w-full h-full">
        <Image
          src="/assets/mobban.webp"
          alt="mobile banner"
          width={768} // Appropriate mobile width
          height={500} // Appropriate mobile height
          className="w-full h-auto object-cover" // Changed to h-auto
          style={{ display: "block" }} // Ensure proper display
        />
      </div>
      {/* Enquiry Form */}
      <div
        id="form"
        className="w-full px-2 pb-1 sm:px-6 xl:px-10 xl:absolute xl:top-[2.7vw] xl:right-[10vw] xl:justify-end z-20 flex justify-center mt-4 lg:mt-0"
      >
        <div className="w-full lg:max-w-full xl:max-w-[400px]">
          <div className="bg-white rounded-xl lg:shadow-xl p-4 sm:p-5 md:p-4 lg:p-2 xl:p-5 border border-gray-100">
            {/* Header */}
            <div className="text-center mb-4 md:mb-3">
              <h2 className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-2">
                ENQUIRE NOW
              </h2>
              <p className="text-sm sm:text-xs md:text-sm text-gray-600 leading-relaxed">
                Simply fill in the enquiry form below and we&apos;ll be in touch
                with you soon to plan your next epic event!
              </p>
            </div>

            {/* Status */}
            {status && (
              <div
                className={`text-center font-medium mb-4 text-sm ${
                  status.includes("success") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-2 md:space-y-2 lg:space-y-3 xl:space-y-5"
            >
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                    formik.touched.fullName && formik.errors.fullName
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                    formik.touched.phone && formik.errors.phone
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>
{/* Date */}
<div>
  <DatePicker
    selected={formik.values.date}
    onChange={(date) => formik.setFieldValue('date', date)}
    onBlur={() => formik.setFieldTouched('date', true)}
    placeholderText="Select Date *"
    dateFormat="dd/MM/yyyy"
    minDate={new Date()} // Prevents selecting past dates
    className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
      formik.touched.date && formik.errors.date
        ? "border-red-500 bg-red-50"
        : "border-gray-300"
    }`}
    wrapperClassName="w-full"
    popperClassName="z-50"
  />
  {formik.touched.date && formik.errors.date && (
    <p className="text-red-500 text-xs mt-1">
      {formik.errors.date}
    </p>
  )}
</div>

      {!isMaladPage && (
  <div>
    <select
      name="venue"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.venue}
      className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
        formik.touched.venue && formik.errors.venue
          ? "border-red-500 bg-red-50"
          : "border-gray-300"
      } ${formik.values.venue ? "text-black" : "text-gray-500"}`}
    >
      <option value="" disabled>
        Select your Venue *
      </option>
      {currentVenues.map((venue, index) => (
        <option key={index} value={venue}>
          {venue}
        </option>
      ))}
    </select>
    {formik.touched.venue && formik.errors.venue && (
      <p className="text-red-500 text-xs mt-1">{formik.errors.venue}</p>
    )}
  </div>
)}


              {/* Terms & Conditions */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.terms}
                  className="mt-1 h-4 w-4 text-blue-600 border border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="terms"
                  className="text-xs text-gray-600 leading-relaxed"
                >
                  I agree with the{" "}
                  <a
                    href="https://www.timezonegames.com/en-in/terms-and-conditions/"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
              {formik.touched.terms && formik.errors.terms && (
                <p className="text-red-500 text-xs">{formik.errors.terms}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-2 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md text-sm ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-900 hover:bg-blue-800 text-white"
                }`}
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT ENQUIRY"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
