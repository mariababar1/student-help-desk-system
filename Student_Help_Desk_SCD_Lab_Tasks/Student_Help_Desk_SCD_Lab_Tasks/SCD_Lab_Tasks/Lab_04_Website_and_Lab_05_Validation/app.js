"use strict";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const namePattern = /^[A-Za-z][A-Za-z .'-]{1,59}$/;

function setError(input, errorId, message) {
  const error = document.getElementById(errorId);
  if (error) error.textContent = message;
  if (input) input.setAttribute("aria-invalid", message ? "true" : "false");
}
function setMessage(id, message, success = false) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = message;
  el.className = `message ${success ? "success" : "failure"}`;
}
function validName(input, errorId) {
  const ok = namePattern.test(input.value.trim());
  setError(input, errorId, ok ? "" : "Enter a name of 2–60 characters using letters, spaces, apostrophes, periods, or hyphens.");
  return ok;
}
function validEmail(input, errorId) {
  const ok = input.value.trim().length <= 254 && emailPattern.test(input.value.trim());
  setError(input, errorId, ok ? "" : "Enter a valid email address.");
  return ok;
}
function validPassword(input, errorId) {
  const value = input.value;
  const ok = value.length >= 8 && value.length <= 64 && !/\s/.test(value);
  setError(input, errorId, ok ? "" : "Password must be 8–64 characters and contain no spaces.");
  return ok;
}

const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("fullName");
    const email = document.getElementById("regEmail");
    const password = document.getElementById("regPassword");
    const confirm = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");
    const checks = [
      validName(name, "fullNameError"),
      validEmail(email, "regEmailError"),
      validPassword(password, "regPasswordError")
    ];
    const match = password.value === confirm.value && confirm.value.length > 0;
    setError(confirm, "confirmPasswordError", match ? "" : "Passwords do not match.");
    setError(terms, "termsError", terms.checked ? "" : "Please confirm the statement.");
    checks.push(match, terms.checked);
    if (checks.every(Boolean)) {
      setMessage("registerMessage", "Validation successful. Demo only: no account has been created or stored.", true);
      registerForm.reset();
      registerForm.querySelectorAll("[aria-invalid]").forEach(el => el.removeAttribute("aria-invalid"));
    } else {
      setMessage("registerMessage", "Please correct the highlighted fields.");
    }
  });
}
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    const e = validEmail(email, "loginEmailError");
    const p = validPassword(password, "loginPasswordError");
    if (e && p) setMessage("loginMessage", "Input format is valid. Demo only: authentication is not connected to a server.", true);
    else setMessage("loginMessage", "Please correct the highlighted fields.");
  });
}
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const n = validName(name, "contactNameError");
    const e = validEmail(email, "contactEmailError");
    const s = subject.value.trim().length >= 3 && subject.value.trim().length <= 100;
    const m = message.value.trim().length >= 10 && message.value.trim().length <= 1000;
    setError(subject, "subjectError", s ? "" : "Subject must be 3–100 characters.");
    setError(message, "messageError", m ? "" : "Message must be 10–1000 characters.");
    if (n && e && s && m) {
      setMessage("contactResponse", "Validation successful. Demo only: the message was not sent to a server.", true);
      contactForm.reset();
      contactForm.querySelectorAll("[aria-invalid]").forEach(el => el.removeAttribute("aria-invalid"));
    } else setMessage("contactResponse", "Please correct the highlighted fields.");
  });
}
