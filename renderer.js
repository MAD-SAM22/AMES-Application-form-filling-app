const translateBtn = document.getElementById('translateBtn');
const generateBtn = document.getElementById('generateBtn');
const status = document.getElementById('status');

const formFields = [
  // 1. Application Details
  {
    arabicId: 'arabic-applicant-name',
    englishId: 'english-applicant-name',
    arabicLabel: 'الاسم الكامل للمتقدم',
    englishLabel: 'Main Applicant Name'
  },
  {
    arabicId: 'arabic-visa-expiry',
    englishId: 'english-visa-expiry',
    arabicLabel: 'تاريخ انتهاء التأشيرة الحالية',
    englishLabel: 'Current Visa Expiration Date'
  },
  {
    arabicId: 'arabic-personal-dob',
    englishId: 'english-personal-dob',
    arabicLabel: 'تاريخ الميلاد',
    englishLabel: 'Date of Birth'
  },
  {
    arabicId: 'arabic-personal-email',
    englishId: 'english-personal-email',
    arabicLabel: 'البريد الإلكتروني',
    englishLabel: 'E-mail'
  },
  {
    arabicId: 'arabic-personal-mobile',
    englishId: 'english-personal-mobile',
    arabicLabel: 'رقم الجوال',
    englishLabel: 'Mobile'
  },
  {
    arabicId: 'arabic-personal-address',
    englishId: 'english-personal-address',
    arabicLabel: 'العنوان في البلد الأصلي',
    englishLabel: 'Home Country Address'
  },
  {
    arabicId: 'arabic-personal-address-aus',
    englishId: 'english-personal-address-aus',
    arabicLabel: 'العنوان في أستراليا (إن وجد)',
    englishLabel: 'Address in Australia (if known)'
  },
  {
    arabicId: 'arabic-personal-marital',
    englishId: 'english-personal-marital',
    arabicLabel: 'الحالة الاجتماعية',
    englishLabel: 'Marital Status',
    type: 'select',
    options: {
      arabic: [
        { value: '', label: 'اختر الحالة الاجتماعية' },
        { value: 'لم يتزوج', label: 'لم يتزوج' },
        { value: 'متزوج', label: 'متزوج' },
        { value: 'علاقة حقيقية', label: 'علاقة حقيقية' },
        { value: 'مطلق', label: 'مطلق' },
        { value: 'منفصل', label: 'منفصل' }
      ],
      english: [
        { value: '', label: 'Choose marital status' },
        { value: 'Never Married', label: 'Never Married' },
        { value: 'Married', label: 'Married' },
        { value: 'De Facto', label: 'De Facto' },
        { value: 'Divorced', label: 'Divorced' },
        { value: 'Separated', label: 'Separated' }
      ]
    }
  },
  {
    arabicId: 'arabic-personal-medical',
    englishId: 'english-personal-medical',
    arabicLabel: 'الحالة الصحية (إن وجدت)',
    englishLabel: 'Medical condition (if any)'
  },
  {
    arabicId: 'arabic-personal-criminal',
    englishId: 'english-personal-criminal',
    arabicLabel: 'السجل الجنائي (إن وجد)',
    englishLabel: 'Police/Criminal record (if any)'
  },
  {
    arabicId: 'arabic-personal-visa-applied',
    englishId: 'english-personal-visa-applied',
    arabicLabel: 'هل تقدمت بطلب تأشيرة لأي بلد؟',
    englishLabel: 'Have you applied any visa for any country?',
    type: 'select',
    options: {
      arabic: [
        { value: 'نعم', label: 'نعم' },
        { value: 'لا', label: 'لا' }
      ],
      english: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' }
      ]
    }
  },
  {
    arabicId: 'arabic-personal-visa-status',
    englishId: 'english-personal-visa-status',
    arabicLabel: 'إذا كانت الإجابة نعم، هل تمت الموافقة عليها أم لا؟',
    englishLabel: 'If yes, was it approved or not?'
  },

  // 2. Travel History
  {
    arabicId: 'arabic-travel-origin',
    englishId: 'english-travel-origin',
    arabicLabel: 'بلد المنشأ',
    englishLabel: 'Country of Origin'
  },
  {
    arabicId: 'arabic-travel-destination',
    englishId: 'english-travel-destination',
    arabicLabel: 'بلد المقصد',
    englishLabel: 'Country of Destination'
  },
  {
    arabicId: 'arabic-travel-date-from',
    englishId: 'english-travel-date-from',
    arabicLabel: 'تاريخ من',
    englishLabel: 'Date From'
  },
  {
    arabicId: 'arabic-travel-date-until',
    englishId: 'english-travel-date-until',
    arabicLabel: 'تاريخ حتى',
    englishLabel: 'Date Until'
  },
  {
    arabicId: 'arabic-travel-reason',
    englishId: 'english-travel-reason',
    arabicLabel: 'سبب الزيارة',
    englishLabel: 'Reason for Visit'
  },

  // 3. Family Information
  {
    arabicId: 'arabic-father-name',
    englishId: 'english-father-name',
    arabicLabel: 'اسم الأب',
    englishLabel: 'Father Name'
  },
  {
    arabicId: 'arabic-father-dob',
    englishId: 'english-father-dob',
    arabicLabel: 'تاريخ ميلاد الأب',
    englishLabel: 'Father Date of Birth'
  },
  {
    arabicId: 'arabic-father-gender',
    englishId: 'english-father-gender',
    arabicLabel: 'جنس الأب',
    englishLabel: 'Father Gender',
    type: 'select',
    options: {
      arabic: [
        { value: '', label: 'اختر الجنس' },
        { value: 'ذكر', label: 'ذكر' },
        { value: 'أنثى', label: 'أنثى' }
      ],
      english: [
        { value: '', label: 'Choose gender' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' }
      ]
    }
  },
  {
    arabicId: 'arabic-father-residence',
    englishId: 'english-father-residence',
    arabicLabel: 'محل إقامة الأب',
    englishLabel: 'Father Country of Residence'
  },
  {
    arabicId: 'arabic-father-employment',
    englishId: 'english-father-employment',
    arabicLabel: 'تفاصيل عمل الأب',
    englishLabel: 'Father Employment Details'
  },

  {
    arabicId: 'arabic-mother-name',
    englishId: 'english-mother-name',
    arabicLabel: 'اسم الأم',
    englishLabel: 'Mother Name'
  },
  {
    arabicId: 'arabic-mother-dob',
    englishId: 'english-mother-dob',
    arabicLabel: 'تاريخ ميلاد الأم',
    englishLabel: 'Mother Date of Birth'
  },
  {
    arabicId: 'arabic-mother-gender',
    englishId: 'english-mother-gender',
    arabicLabel: 'جنس الأم',
    englishLabel: 'Mother Gender',
    type: 'select',
    options: {
      arabic: [
        { value: '', label: 'اختر الجنس' },
        { value: 'ذكر', label: 'ذكر' },
        { value: 'أنثى', label: 'أنثى' }
      ],
      english: [
        { value: '', label: 'Choose gender' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' }
      ]
    }
  },
  {
    arabicId: 'arabic-mother-residence',
    englishId: 'english-mother-residence',
    arabicLabel: 'محل إقامة الأم',
    englishLabel: 'Mother Country of Residence'
  },
  {
    arabicId: 'arabic-mother-employment',
    englishId: 'english-mother-employment',
    arabicLabel: 'تفاصيل عمل الأم',
    englishLabel: 'Mother Employment Details'
  },

  {
    arabicId: 'arabic-father-in-law-name',
    englishId: 'english-father-in-law-name',
    arabicLabel: 'اسم والد الزوج/الزوجة',
    englishLabel: 'Father-in-law Name'
  },
  {
    arabicId: 'arabic-father-in-law-dob',
    englishId: 'english-father-in-law-dob',
    arabicLabel: 'تاريخ ميلاد والد الزوج/الزوجة',
    englishLabel: 'Father-in-law Date of Birth'
  },
  {
    arabicId: 'arabic-father-in-law-gender',
    englishId: 'english-father-in-law-gender',
    arabicLabel: 'الجنس',
    englishLabel: 'Gender',
    type: 'select',
    options: {
      arabic: [
        { value: '', label: 'اختر الجنس' },
        { value: 'ذكر', label: 'ذكر' },
        { value: 'أنثى', label: 'أنثى' }
      ],
      english: [
        { value: '', label: '' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' }
      ]
    }
  },
  {
    arabicId: 'arabic-father-in-law-residence',
    englishId: 'english-father-in-law-residence',
    arabicLabel: 'محل إقامة والد الزوج/الزوجة',
    englishLabel: 'Father-in-law Country of Residence'
  },
  {
    arabicId: 'arabic-father-in-law-employment',
    englishId: 'english-father-in-law-employment',
    arabicLabel: 'تفاصيل عمل والد الزوج/الزوجة',
    englishLabel: 'Father-in-law Employment Details'
  },

  {
    arabicId: 'arabic-mother-in-law-name',
    englishId: 'english-mother-in-law-name',
    arabicLabel: 'اسم والدة الزوج/الزوجة',
    englishLabel: 'Mother-in-law Name'
  },
  {
    arabicId: 'arabic-mother-in-law-dob',
    englishId: 'english-mother-in-law-dob',
    arabicLabel: 'تاريخ ميلاد والدة الزوج/الزوجة',
    englishLabel: 'Mother-in-law Date of Birth'
  },
  {
    arabicId: 'arabic-mother-in-law-gender',
    englishId: 'english-mother-in-law-gender',
    arabicLabel: 'الجنس',
    englishLabel: 'Gender',
    type: 'select',
    options: {
      arabic: [
        { value: '', label: 'اختر الجنس' },
        { value: 'ذكر', label: 'ذكر' },
        { value: 'أنثى', label: 'أنثى' }
      ],
      english: [
        { value: '', label: '' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' }
      ]
    }
  },
  {
    arabicId: 'arabic-mother-in-law-residence',
    englishId: 'english-mother-in-law-residence',
    arabicLabel: 'محل إقامة والدة الزوج/الزوجة',
    englishLabel: 'Mother-in-law Country of Residence'
  },
  {
    arabicId: 'arabic-mother-in-law-employment',
    englishId: 'english-mother-in-law-employment',
    arabicLabel: 'تفاصيل عمل والدة الزوج/الزوجة',
    englishLabel: 'Mother-in-law Employment Details'
  },

  {
    arabicId: 'arabic-spouse-name',
    englishId: 'english-spouse-name',
    arabicLabel: 'اسم الزوج/الزوجة',
    englishLabel: 'Spouse/Partner Name'
  },
  {
    arabicId: 'arabic-spouse-dob',
    englishId: 'english-spouse-dob',
    arabicLabel: 'تاريخ ميلاد الزوج/الزوجة',
    englishLabel: 'Spouse/Partner Date of Birth'
  },
  {
    arabicId: 'arabic-spouse-gender',
    englishId: 'english-spouse-gender',
    arabicLabel: 'الجنس',
    englishLabel: 'Gender',
    type: 'select',
    options: {
      arabic: [
        { value: '', label: 'اختر الجنس' },
        { value: 'ذكر', label: 'ذكر' },
        { value: 'أنثى', label: 'أنثى' }
      ],
      english: [
        { value: '', label: '' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' }
      ]
    }
  },
  {
    arabicId: 'arabic-spouse-residence',
    englishId: 'english-spouse-residence',
    arabicLabel: 'محل إقامة الزوج/الزوجة',
    englishLabel: 'Spouse/Partner Country of Residence'
  },
  {
    arabicId: 'arabic-spouse-employment',
    englishId: 'english-spouse-employment',
    arabicLabel: 'تفاصيل عمل الزوج/الزوجة',
    englishLabel: 'Spouse/Partner Employment Details'
  },

  {
    arabicId: 'arabic-siblings',
    englishId: 'english-siblings',
    arabicLabel: 'الأخوة والأخوات',
    englishLabel: 'Sisters/Brothers'
  },

  {
    arabicId: 'arabic-children',
    englishId: 'english-children',
    arabicLabel: 'الأبناء',
    englishLabel: 'Children'
  },

  // 4. Emergency Contacts
  {
    arabicId: 'arabic-emergency-home-name',
    englishId: 'english-emergency-home-name',
    arabicLabel: 'اسم جهة الاتصال في بلدك',
    englishLabel: 'Emergency Contact Name (Home Country)'
  },
  {
    arabicId: 'arabic-emergency-home-relationship',
    englishId: 'english-emergency-home-relationship',
    arabicLabel: 'صلة القرابة',
    englishLabel: 'Relationship to you',
    type: 'select',
    options: {
      arabic: [
        { value: '', label: 'اختر صلة القرابة' },
        { value: 'قريب', label: 'قريب' },
        { value: 'صديق', label: 'صديق' },
        { value: 'زميل', label: 'زميل' },
        { value: 'أخرى', label: 'أخرى' }
      ],
      english: [
        { value: '', label: 'Choose relationship' },
        { value: 'Relative', label: 'Relative' },
        { value: 'Friend', label: 'Friend' },
        { value: 'Colleague', label: 'Colleague' },
        { value: 'Other', label: 'Other' }
      ]
    }
  },
  {
    arabicId: 'arabic-emergency-home-address',
    englishId: 'english-emergency-home-address',
    arabicLabel: 'العنوان',
    englishLabel: 'Address'
  },
  {
    arabicId: 'arabic-emergency-home-phone',
    englishId: 'english-emergency-home-phone',
    arabicLabel: 'رقم الاتصال',
    englishLabel: 'Contact Number'
  },

  {
    arabicId: 'arabic-emergency-aus-name',
    englishId: 'english-emergency-aus-name',
    arabicLabel: 'اسم جهة الاتصال في أستراليا',
    englishLabel: 'Emergency Contact Name (Australia)'
  },
  {
    arabicId: 'arabic-emergency-aus-address',
    englishId: 'english-emergency-aus-address',
    arabicLabel: 'العنوان',
    englishLabel: 'Address'
  },
  {
    arabicId: 'arabic-emergency-aus-relationship',
    englishId: 'english-emergency-aus-relationship',
    arabicLabel: 'صلة القرابة',
    englishLabel: 'Relationship to you',
    type: 'select',
    options: {
      arabic: [
        { value: '', label: 'اختر صلة القرابة' },
        { value: 'قريب', label: 'قريب' },
        { value: 'صديق', label: 'صديق' },
        { value: 'زميل', label: 'زميل' },
        { value: 'أخرى', label: 'أخرى' }
      ],
      english: [
        { value: '', label: 'Choose relationship' },
        { value: 'Relative', label: 'Relative' },
        { value: 'Friend', label: 'Friend' },
        { value: 'Colleague', label: 'Colleague' },
        { value: 'Other', label: 'Other' }
      ]
    }
  },
  {
    arabicId: 'arabic-emergency-aus-phone',
    englishId: 'english-emergency-aus-phone',
    arabicLabel: 'رقم الاتصال',
    englishLabel: 'Contact Number'
  },

  // 5. Education
  {
    arabicId: 'arabic-education-high-school',
    englishId: 'english-education-high-school',
    arabicLabel: 'المدرسة الثانوية',
    englishLabel: 'High School'
  },
  {
    arabicId: 'arabic-education-high-school-course',
    englishId: 'english-education-high-school-course',
    arabicLabel: 'اسم الدورة',
    englishLabel: 'Course Name'
  },
  {
    arabicId: 'arabic-education-high-school-dates',
    englishId: 'english-education-high-school-dates',
    arabicLabel: 'تواريخ الحضور',
    englishLabel: 'Attendance Dates'
  },

  {
    arabicId: 'arabic-education-university',
    englishId: 'english-education-university',
    arabicLabel: 'الكلية/الجامعة',
    englishLabel: 'College/University'
  },
  {
    arabicId: 'arabic-education-university-course',
    englishId: 'english-education-university-course',
    arabicLabel: 'اسم الدورة',
    englishLabel: 'Course Name'
  },
  {
    arabicId: 'arabic-education-university-dates',
    englishId: 'english-education-university-dates',
    arabicLabel: 'تواريخ الحضور',
    englishLabel: 'Attendance Dates'
  },
  {
    arabicId: 'arabic-education-university-completed',
    englishId: 'english-education-university-completed',
    arabicLabel: 'هل أكملت الدورة؟',
    englishLabel: 'Course Completed?',
    type: 'select',
    options: {
      arabic: [
        { value: '', label: 'اختر الإجابة' },
        { value: 'نعم', label: 'نعم' },
        { value: 'لا', label: 'لا' }
      ],
      english: [
        { value: '', label: 'Choose answer' },
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' }
      ]
    }
  },

  // 6. English Proficiency Test
  {
    arabicId: 'arabic-english-test-type',
    englishId: 'english-english-test-type',
    arabicLabel: 'نوع اختبار اللغة الإنجليزية',
    englishLabel: 'English Test Type',
    type: 'select',
    options: {
      arabic: [
        { value: '', label: 'اختر نوع الاختبار' },
        { value: 'آيلتس', label: 'آيلتس' },
        { value: 'بي تي إي', label: 'بي تي إي' },
        { value: 'توفل', label: 'توفل' },
        { value: 'كامبريدج', label: 'كامبريدج' },
        { value: 'لا يوجد اختبار', label: 'لا يوجد اختبار' }
      ],
      english: [
        { value: '', label: 'Choose test type' },
        { value: 'IELTS', label: 'IELTS' },
        { value: 'PTE', label: 'PTE' },
        { value: 'TOEFL', label: 'TOEFL' },
        { value: 'Cambridge', label: 'Cambridge' },
        { value: 'No test', label: 'No test' }
      ]
    }
  },
  {
    arabicId: 'arabic-english-test-date',
    englishId: 'english-english-test-date',
    arabicLabel: 'تاريخ الاختبار',
    englishLabel: 'Test Date'
  },
  {
    arabicId: 'arabic-english-test-results',
    englishId: 'english-english-test-results',
    arabicLabel: 'نتائج الاختبار',
    englishLabel: 'Test Results'
  },

  // 7. Employment History
  {
    arabicId: 'arabic-employment-status',
    englishId: 'english-employment-status',
    arabicLabel: 'الحالة الوظيفية',
    englishLabel: 'Employment Status',
    type: 'select',
    options: {
      arabic: [
        { value: '', label: 'اختر الحالة الوظيفية' },
        { value: 'عاطل عن العمل', label: 'عاطل عن العمل' },
        { value: 'موظف', label: 'موظف' },
        { value: 'صاحب عمل', label: 'صاحب عمل' },
        { value: 'أخرى', label: 'أخرى' }
      ],
      english: [
        { value: '', label: 'Choose employment status' },
        { value: 'Unemployed', label: 'Unemployed' },
        { value: 'Employed', label: 'Employed' },
        { value: 'Self-Employed', label: 'Self-Employed' },
        { value: 'Other', label: 'Other' }
      ]
    }
  },
  {
    arabicId: 'arabic-employment-organization',
    englishId: 'english-employment-organization',
    arabicLabel: 'اسم المؤسسة',
    englishLabel: 'Organization Name'
  },
  {
    arabicId: 'arabic-employment-industry',
    englishId: 'english-employment-industry',
    arabicLabel: 'نوع الصناعة',
    englishLabel: 'Industry Type'
  },
  {
    arabicId: 'arabic-employment-address',
    englishId: 'english-employment-address',
    arabicLabel: 'عنوان العمل',
    englishLabel: 'Work Address'
  },
  {
    arabicId: 'arabic-employment-position',
    englishId: 'english-employment-position',
    arabicLabel: 'تفاصيل المنصب',
    englishLabel: 'Position Details'
  },
  {
    arabicId: 'arabic-employment-dates',
    englishId: 'english-employment-dates',
    arabicLabel: 'تواريخ التوظيف',
    englishLabel: 'Employment Dates'
  },
  {
    arabicId: 'arabic-employment-employer-name',
    englishId: 'english-employment-employer-name',
    arabicLabel: 'اسم صاحب العمل',
    englishLabel: 'Employer Name'
  },
  {
    arabicId: 'arabic-employment-employer-phone',
    englishId: 'english-employment-employer-phone',
    arabicLabel: 'رقم هاتف صاحب العمل',
    englishLabel: 'Employer Contact Number'
  },
  {
    arabicId: 'arabic-unemployment-reason',
    englishId: 'english-unemployment-reason',
    arabicLabel: 'سبب البطالة',
    englishLabel: 'Reasons for Unemployment'
  },
  {
    arabicId: 'arabic-unemployment-date',
    englishId: 'english-unemployment-date',
    arabicLabel: 'تاريخ البطالة',
    englishLabel: 'Date of Unemployment'
  },

  // 8. Additional Information
  {
    arabicId: 'arabic-additional-info',
    englishId: 'english-additional-info',
    arabicLabel: 'معلومات إضافية',
    englishLabel: 'Additional Information'
  },

  // 9. Declaration
  {
    arabicId: 'arabic-declaration',
    englishId: 'english-declaration',
    arabicLabel: 'الإقرار',
    englishLabel: 'Declaration'
  }
];

// Helper function to update status with different states
function updateStatus(message, type = 'loading') {
  status.textContent = message;
  status.className = `status ${type}`;
}

// Helper function to update button state
function updateButtonState(button, loading = false) {
  const btnText = button.querySelector('.btn-text');
  if (loading) {
    button.disabled = true;
    const originalText = btnText.textContent;
    btnText.innerHTML = `<span class="spinner"></span> ${originalText}...`;
  } else {
    button.disabled = false;
    btnText.innerHTML = btnText.textContent.replace('...', '');
  }
}

async function translateText(text, retries = 3, timeout = 10000) {
  if (!text.trim()) return '';

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const result = await window.electronAPI.translateText(text, 'ar', 'en');
      if (result.success) {
        return result.translated;
      } else {
        throw new Error(result.error || 'Unknown translation error');
      }
    } catch (err) {
      console.error(`Translation error (attempt ${attempt}/${retries}):`, err);
      if (attempt === retries) {
        throw new Error(
          'Translation failed after multiple attempts. ' +
          'Please check your internet connection and try again. ' +
          'If the problem persists, try translating fewer fields at a time.'
        );
      }
      // Wait before retrying (exponential backoff)
      const backoffDelay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
      await new Promise(resolve => setTimeout(resolve, backoffDelay));
    }
  }
}

async function generateDocument() {
  try {
    const formData = collectFormData();
    const result = await window.electronAPI.generateDocument(formData);
    
    if (result.success) {
      showStatus(`Document generated successfully!\nPath: ${result.docxPath}`, 'success');
    } else {
      showStatus(`Error: ${result.error}`, 'error');
    }
  } catch (error) {
    showStatus(`Error: ${error.message}`, 'error');
  }
}

translateBtn.addEventListener('click', async () => {
  updateButtonState(translateBtn, true);
  updateStatus('Translating...');

  try {
    let hasText = false;
    const translations = await Promise.all(
      formFields.map(async field => {
        const arabicText = document.getElementById(field.arabicId).value;
        if (arabicText.trim()) {
          hasText = true;
          const translatedText = await translateText(arabicText);
          document.getElementById(field.englishId).value = translatedText;
          return { field: field.englishLabel, arabic: arabicText, english: translatedText };
        }
        return { field: field.englishLabel, arabic: '', english: '' };
      })
    );

    if (!hasText) {
      throw new Error('Please enter at least one Arabic text to translate');
    }

    updateStatus('Translation completed successfully!', 'success');
  } catch (error) {
    updateStatus(error.message, 'error');
  } finally {
    updateButtonState(translateBtn, false);
  }
});

generateBtn.addEventListener('click', async () => {
  try {
    updateStatus('Generating document...', 'loading');
    updateButtonState(generateBtn, true);

    // Get all form data
    const formData = {};
    formFields.forEach(field => {
      const englishInput = document.getElementById(field.englishId);
      formData[field.englishId] = englishInput?.value?.trim() || 'N/A';
    });

    // Get siblings data
    const siblingsCount = Math.min(parseInt(document.getElementById('siblings-count')?.value || '0'), 5);
    const siblingsData = [];
    
    for (let i = 0; i < 5; i++) {
      if (i < siblingsCount) {
        const arabicName = document.getElementById(`arabic-sibling-${i}-name`)?.value?.trim() || "";
        const arabicDob = document.getElementById(`arabic-sibling-${i}-dob`)?.value?.trim() || "";
        const arabicGender = document.getElementById(`arabic-sibling-${i}-gender`)?.value?.trim() || "";
        const arabicResidence = document.getElementById(`arabic-sibling-${i}-residence`)?.value?.trim() || "";
        const arabicEmployment = document.getElementById(`arabic-sibling-${i}-employment`)?.value?.trim() || "";

        // Translate all fields except gender
        const translatedName = arabicName ? await translateText(arabicName) : "";
        const translatedDob = arabicDob ? await translateText(arabicDob) : "";
        const translatedResidence = arabicResidence ? await translateText(arabicResidence) : "";
        const translatedEmployment = arabicEmployment ? await translateText(arabicEmployment) : "";

        const sibling = {
          number: i + 1,
          name: translatedName || "",
          dob: translatedDob || "",
          gender: arabicGender === 'ذكر' ? 'Male' : arabicGender === 'أنثى' ? 'Female' : "",
          residence: translatedResidence || "",
          employment: translatedEmployment || ""
        };
        siblingsData.push(sibling);
      } else {
        // Add empty sibling data for remaining slots
        siblingsData.push({
          number: i + 1,
          name: "",
          dob: "",
          gender: "",
          residence: "",
          employment: ""
        });
      }
    }

    // Get children data
    const childrenCount = Math.min(parseInt(document.getElementById('children-count')?.value || '0'), 5);
    const childrenData = [];
    
    for (let i = 0; i < 5; i++) {
      if (i < childrenCount) {
        const arabicName = document.getElementById(`arabic-child-${i}-name`)?.value?.trim() || "";
        const arabicDob = document.getElementById(`arabic-child-${i}-dob`)?.value?.trim() || "";
        const arabicGender = document.getElementById(`arabic-child-${i}-gender`)?.value?.trim() || "";
        const arabicResidence = document.getElementById(`arabic-child-${i}-residence`)?.value?.trim() || "";
        const arabicEducation = document.getElementById(`arabic-child-${i}-education`)?.value?.trim() || "";

        // Translate all fields except gender
        const translatedName = arabicName ? await translateText(arabicName) : "";
        const translatedDob = arabicDob ? await translateText(arabicDob) : "";
        const translatedResidence = arabicResidence ? await translateText(arabicResidence) : "";
        const translatedEducation = arabicEducation ? await translateText(arabicEducation) : "";

        const child = {
          number: i + 1,
          name: translatedName || "",
          dob: translatedDob || "",
          gender: arabicGender === 'ذكر' ? 'Male' : arabicGender === 'أنثى' ? 'Female' : "",
          residence: translatedResidence || "",
          education: translatedEducation || ""
        };
        childrenData.push(child);
      } else {
        // Add empty child data for remaining slots
        childrenData.push({
          number: i + 1,
          name: "",
          dob: "",
          gender: "",
          residence: "",
          education: ""
        });
      }
    }

    // Create the document data object with individual fields for each sibling and child
    const documentData = {
      // Main Applicant Info
      applicant_name: formData['english-applicant-name'] || 'N/A',
      visa_expiry: formData['english-visa-expiry'] || 'N/A',

      // Personal Info
      personal_dob: formData['english-personal-dob'] || 'N/A',
      personal_email: formData['english-personal-email'] || 'N/A',
      personal_mobile: formData['english-personal-mobile'] || 'N/A',
      personal_address: formData['english-personal-address'] || 'N/A',
      personal_address_aus: formData['english-personal-address-aus'] || 'N/A',
      personal_marital: formData['english-personal-marital'] || 'N/A',
      personal_medical: formData['english-personal-medical'] || 'N/A',
      personal_criminal: formData['english-personal-criminal'] || 'N/A',
      personal_visa_applied: formData['english-personal-visa-applied'] || 'N/A',
      personal_visa_status: formData['english-personal-visa-status'] || 'N/A',

      // Travel History
      travel_origin: formData['english-travel-origin'] || 'N/A',
      travel_destination: formData['english-travel-destination'] || 'N/A',
      travel_date_from: formData['english-travel-date-from'] || 'N/A',
      travel_date_until: formData['english-travel-date-until'] || 'N/A',
      travel_reason: formData['english-travel-reason'] || 'N/A',

      // Family Info
      father_name: formData['english-father-name'] || 'N/A',
      father_dob: formData['english-father-dob'] || 'N/A',
      father_gender: formData['english-father-gender'] || 'N/A',
      father_residence: formData['english-father-residence'] || 'N/A',
      father_employment: formData['english-father-employment'] || 'N/A',

      mother_name: formData['english-mother-name'] || 'N/A',
      mother_dob: formData['english-mother-dob'] || 'N/A',
      mother_gender: formData['english-mother-gender'] || 'N/A',
      mother_residence: formData['english-mother-residence'] || 'N/A',
      mother_employment: formData['english-mother-employment'] || 'N/A',

      father_in_law_name: formData['english-father-in-law-name'] || 'N/A',
      father_in_law_dob: formData['english-father-in-law-dob'] || 'N/A',
      father_in_law_gender: formData['english-father-in-law-gender'] || 'N/A',
      father_in_law_residence: formData['english-father-in-law-residence'] || 'N/A',
      father_in_law_employment: formData['english-father-in-law-employment'] || 'N/A',

      mother_in_law_name: formData['english-mother-in-law-name'] || 'N/A',
      mother_in_law_dob: formData['english-mother-in-law-dob'] || 'N/A',
      mother_in_law_gender: formData['english-mother-in-law-gender'] || 'N/A',
      mother_in_law_residence: formData['english-mother-in-law-residence'] || 'N/A',
      mother_in_law_employment: formData['english-mother-in-law-employment'] || 'N/A',

      spouse_name: formData['english-spouse-name'] || 'N/A',
      spouse_dob: formData['english-spouse-dob'] || 'N/A',
      spouse_gender: formData['english-spouse-gender'] || 'N/A',
      spouse_residence: formData['english-spouse-residence'] || 'N/A',
      spouse_employment: formData['english-spouse-employment'] || 'N/A',

      // Emergency Contacts
      emergency_home_name: formData['english-emergency-home-name'] || 'N/A',
      emergency_home_relationship: formData['english-emergency-home-relationship'] || 'N/A',
      emergency_home_address: formData['english-emergency-home-address'] || 'N/A',
      emergency_home_phone: formData['english-emergency-home-phone'] || 'N/A',
      
      emergency_aus_name: formData['english-emergency-aus-name'] || 'N/A',
      emergency_aus_address: formData['english-emergency-aus-address'] || 'N/A',
      emergency_aus_relationship: formData['english-emergency-aus-relationship'] || 'N/A',
      emergency_aus_phone: formData['english-emergency-aus-phone'] || 'N/A',

      // Education
      education_high_school: formData['english-education-high-school'] || 'N/A',
      education_high_school_course: formData['english-education-high-school-course'] || 'N/A',
      education_high_school_dates: formData['english-education-high-school-dates'] || 'N/A',
      
      education_university: formData['english-education-university'] || 'N/A',
      education_university_course: formData['english-education-university-course'] || 'N/A',
      education_university_dates: formData['english-education-university-dates'] || 'N/A',
      education_university_completed: formData['english-education-university-completed'] || 'N/A',

      // English Test
      english_test_type: formData['english-english-test-type'] || 'N/A',
      english_test_date: formData['english-english-test-date'] || 'N/A',
      english_test_results: formData['english-english-test-results'] || 'N/A',

      // Employment
      employment_status: formData['english-employment-status'] || 'N/A',
      employment_organization: formData['english-employment-organization'] || 'N/A',
      employment_industry: formData['english-employment-industry'] || 'N/A',
      employment_address: formData['english-employment-address'] || 'N/A',
      employment_position: formData['english-employment-position'] || 'N/A',
      employment_dates: formData['english-employment-dates'] || 'N/A',
      employment_employer_name: formData['english-employment-employer-name'] || 'N/A',
      employment_employer_phone: formData['english-employment-employer-phone'] || 'N/A',
      unemployment_reason: formData['english-unemployment-reason'] || 'N/A',
      unemployment_date: formData['english-unemployment-date'] || 'N/A',

      // Additional Information
      additional_info: formData['english-additional-info'] || 'N/A',
      
      // Declaration
      declaration: formData['english-declaration'] || "All Information provided on this sheet is true and correct to the best of my knowledge.",

      // Siblings and Children data (kept as empty strings)
      ...siblingsData.reduce((acc, sibling, index) => ({
        ...acc,
        [`siblings_${index + 1}_name`]: sibling.name,
        [`siblings_${index + 1}_dob`]: sibling.dob,
        [`siblings_${index + 1}_gender`]: sibling.gender || "",
        [`siblings_${index + 1}_residence`]: sibling.residence,
        [`siblings_${index + 1}_employment`]: sibling.employment
      }), {}),
      ...childrenData.reduce((acc, child, index) => ({
        ...acc,
        [`children_${index + 1}_name`]: child.name,
        [`children_${index + 1}_dob`]: child.dob,
        [`children_${index + 1}_gender`]: child.gender || "",
        [`children_${index + 1}_residence`]: child.residence,
        [`children_${index + 1}_education`]: child.education
      }), {})
    };

    // Generate the document
    const result = await window.electronAPI.generateDocument(documentData);
    
    if (result.success) {
      showStatus(`Document generated successfully!\nPath: ${result.docxPath}`, 'success');
    } else {
      const errorMessage = result?.error || 'Failed to generate document';
      showStatus('Failed to generate document: ' + errorMessage, 'error');
    }
  } catch (error) {
    console.error('Document generation error:', error);
    showStatus('Failed to generate document: ' + error.message, 'error');
  } finally {
    updateButtonState(generateBtn, false);
  }
});

// Initialize form fields
function initializeForm() {
  // Add the logo first
  addLogo();

  formFields.forEach(field => {
    const arabicInput = document.getElementById(field.arabicId);
    const englishInput = document.getElementById(field.englishId);

    if (field.type === 'select' && arabicInput && englishInput) {
      // Create select element for Arabic
      const arabicSelect = document.createElement('select');
      arabicSelect.id = field.arabicId;
      arabicSelect.className = 'form-control';
      arabicSelect.dir = 'rtl';
      
      // Add options for Arabic
      field.options.arabic.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        arabicSelect.appendChild(optionElement);
      });

      // Create select element for English
      const englishSelect = document.createElement('select');
      englishSelect.id = field.englishId;
      englishSelect.className = 'form-control';
      
      // Add options for English
      field.options.english.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        englishSelect.appendChild(optionElement);
      });

      // Replace the input elements with select elements
      arabicInput.parentNode.replaceChild(arabicSelect, arabicInput);
      englishInput.parentNode.replaceChild(englishSelect, englishInput);

      // Add event listeners for translation
      arabicSelect.addEventListener('change', () => {
        const selectedOption = field.options.arabic.find(opt => opt.value === arabicSelect.value);
        const englishOption = field.options.english.find(opt => opt.value === selectedOption.value);
        englishSelect.value = englishOption ? englishOption.value : '';
      });
    }
  });

  // Initialize siblings count
  const siblingsCountSelect = document.getElementById('siblings-count');
  if (siblingsCountSelect) {
    siblingsCountSelect.addEventListener('change', function(e) {
      const count = parseInt(e.target.value);
      createSiblingFields(count);
      updateFormFields();
    });
    // Initialize with default value
    createSiblingFields(parseInt(siblingsCountSelect.value));
    updateFormFields();
  }

  // Initialize children count
  const childrenCountSelect = document.getElementById('children-count');
  if (childrenCountSelect) {
    childrenCountSelect.addEventListener('change', function(e) {
      const count = parseInt(e.target.value);
      createChildrenFields(count);
      updateChildrenFormFields();
    });
    // Initialize with default value
    createChildrenFields(parseInt(childrenCountSelect.value));
    updateChildrenFormFields();
  }

  // Initialize other form fields
  formFields.forEach(field => {
    const arabicInput = document.getElementById(field.arabicId);
    const englishInput = document.getElementById(field.englishId);

    if (arabicInput && englishInput) {
      // Add event listeners for translation
      arabicInput.addEventListener('input', debounce(() => {
        translateField(arabicInput, englishInput);
      }, 500));

      // Add event listeners for N/A handling
      arabicInput.addEventListener('blur', () => {
        if (!arabicInput.value.trim()) {
          englishInput.value = 'N/A';
        }
      });
    }
  });
}

// Debounce function to limit API calls
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Translate a single field
async function translateField(arabicInput, englishInput) {
  if (!arabicInput || !englishInput) return;

  const text = arabicInput.value.trim();
  
  if (!text) {
    // Set default values based on field type
    if (arabicInput.id.includes('-marital')) {
      englishInput.value = 'N/A';
    } else if (arabicInput.id.includes('-employment-status')) {
      englishInput.value = 'N/A';
    } else if (arabicInput.id.includes('-english-test-type')) {
      englishInput.value = 'N/A';
    } else if (arabicInput.id.includes('-relationship')) {
      englishInput.value = 'N/A';
    } else if (arabicInput.id.includes('-gender')) {
      englishInput.value = '';  // Keep as empty string for gender fields
    } else if (arabicInput.id.includes('-university-completed')) {
      englishInput.value = 'N/A';
    } else if (arabicInput.id.includes('-visa-applied')) {
      englishInput.value = 'N/A';
    }else {
      englishInput.value = 'N/A'; // General fallback to N/A
    }
    return;
  }

  // Special handling for select fields
  if (arabicInput.id.includes('-marital')) {
    const maritalMap = {
      'لم يتزوج': 'Never Married',
      'متزوج': 'Married',
      'علاقة حقيقية': 'De Facto',
      'مطلق': 'Divorced',
      'منفصل': 'Separated'
    };
    englishInput.value = maritalMap[text] || 'N/A';
    return;
  }

  if (arabicInput.id.includes('-employment-status')) {
    const employmentMap = {
      'عاطل عن العمل': 'Unemployed',
      'موظف': 'Employed',
      'صاحب عمل': 'Self-Employed',
      'أخرى': 'Other'
    };
    englishInput.value = employmentMap[text] || 'N/A';
    return;
  }

  if (arabicInput.id.includes('-english-test-type')) {
    const testMap = {
      'آيلتس': 'IELTS',
      'بي تي إي': 'PTE',
      'توفل': 'TOEFL',
      'كامبريدج': 'Cambridge',
      'لا يوجد اختبار': 'No test'
    };
    englishInput.value = testMap[text] || 'N/A';
    return;
  }

  if (arabicInput.id.includes('-relationship')) {
    const relationshipMap = {
      'قريب': 'Relative',
      'صديق': 'Friend',
      'زميل': 'Colleague',
      'أخرى': 'Other'
    };
    englishInput.value = relationshipMap[text] || 'N/A';
    return;
  }

  if (arabicInput.id.includes('-gender')) {
    englishInput.value = text === 'ذكر' ? 'Male' : text === 'أنثى' ? 'Female' : '';
    return;
  }

  if (arabicInput.id.includes('-university-completed')) {
    englishInput.value = text === 'نعم' ? 'Yes' : text === 'لا' ? 'No' : 'N/A';
    return;
  }

  if (arabicInput.id.includes('-visa-applied')) {
    englishInput.value = text === 'نعم' ? 'Yes' : text === 'لا' ? 'No' : 'N/A';
    return;
  }

  // Handle other fields with translation
  try {
    englishInput.classList.add('loading');
    const result = await window.electronAPI.translateText(text);
    if (result.success) {
      englishInput.value = result.translated;
      englishInput.classList.remove('loading');
      englishInput.classList.add('success');
    } else {
      throw new Error(result.error || 'Translation failed');
    }
  } catch (error) {
    console.error('Translation error:', error);
    englishInput.classList.remove('loading');
    englishInput.classList.add('error');
    englishInput.value = 'Translation failed';
  }
}

// Initialize the form when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeForm);

// Add print functionality
document.getElementById('print-button')?.addEventListener('click', () => {
  window.print();
});

// Add section collapse/expand functionality
document.querySelectorAll('.section-title').forEach(title => {
  title.addEventListener('click', () => {
    const section = title.closest('.form-section');
    const content = section.querySelector('.form-group');
    if (content) {
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }
  });
});

// Siblings handling
function createSiblingFields(count) {
  const container = document.getElementById('siblings-container');
  container.innerHTML = ''; // Clear existing fields

  for (let i = 0; i < count; i++) {
    const siblingDiv = document.createElement('div');
    siblingDiv.className = 'sibling-member';
    siblingDiv.innerHTML = `
      <h4 class="sibling-title">Sibling ${i + 1}</h4>
      <div class="form-group">
        <label class="form-label" for="arabic-sibling-${i}-name">الاسم</label>
        <input type="text" class="form-control" id="arabic-sibling-${i}-name" dir="rtl" placeholder="أدخل الاسم">
      </div>
      <div class="form-group">
        <label class="form-label" for="arabic-sibling-${i}-dob">تاريخ الميلاد</label>
        <input type="text" class="form-control" id="arabic-sibling-${i}-dob" dir="rtl" placeholder="أدخل تاريخ الميلاد">
      </div>
      <div class="form-group">
        <label class="form-label" for="arabic-sibling-${i}-gender">الجنس</label>
        <select class="form-control" id="arabic-sibling-${i}-gender" dir="rtl">
          <option value="">اختر الجنس</option>
          <option value="ذكر">ذكر</option>
          <option value="أنثى">أنثى</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" for="arabic-sibling-${i}-residence">محل الإقامة</label>
        <input type="text" class="form-control" id="arabic-sibling-${i}-residence" dir="rtl" placeholder="أدخل محل الإقامة">
      </div>
      <div class="form-group">
        <label class="form-label" for="arabic-sibling-${i}-employment">تفاصيل العمل</label>
        <textarea class="form-control" id="arabic-sibling-${i}-employment" dir="rtl" placeholder="أدخل تفاصيل العمل"></textarea>
      </div>
    `;
    container.appendChild(siblingDiv);

    // Add event listeners for translation
    const arabicInputs = siblingDiv.querySelectorAll('input, select, textarea');
    arabicInputs.forEach(input => {
      input.addEventListener('change', () => {
        const englishId = input.id.replace('arabic-', 'english-');
        const englishInput = document.getElementById(englishId);
        if (englishInput) {
          translateField(input, englishInput);
        }
      });
    });
  }
}

// Update formFields array to include dynamic sibling fields
function updateFormFields() {
  const siblingsCountSelect = document.getElementById('siblings-count');
  if (!siblingsCountSelect) return;

  const siblingsCount = parseInt(siblingsCountSelect.value);
  const siblingFields = [];
  
  for (let i = 0; i < siblingsCount; i++) {
    siblingFields.push(
      {
        arabicId: `arabic-sibling-${i}-name`,
        englishId: `english-sibling-${i}-name`,
        arabicLabel: `اسم الأخ/الأخت ${i + 1}`,
        englishLabel: `Sibling ${i + 1} Name`
      },
      {
        arabicId: `arabic-sibling-${i}-dob`,
        englishId: `english-sibling-${i}-dob`,
        arabicLabel: `تاريخ ميلاد الأخ/الأخت ${i + 1}`,
        englishLabel: `Sibling ${i + 1} Date of Birth`
      },
      {
        arabicId: `arabic-sibling-${i}-gender`,
        englishId: `english-sibling-${i}-gender`,
        arabicLabel: `جنس الأخ/الأخت ${i + 1}`,
        englishLabel: `Sibling ${i + 1} Gender`
      },
      {
        arabicId: `arabic-sibling-${i}-residence`,
        englishId: `english-sibling-${i}-residence`,
        arabicLabel: `محل إقامة الأخ/الأخت ${i + 1}`,
        englishLabel: `Sibling ${i + 1} Residence`
      },
      {
        arabicId: `arabic-sibling-${i}-employment`,
        englishId: `english-sibling-${i}-employment`,
        arabicLabel: `تفاصيل عمل الأخ/الأخت ${i + 1}`,
        englishLabel: `Sibling ${i + 1} Employment Details`
      }
    );
  }
  
  // Replace the old siblings field with the new dynamic fields
  const oldSiblingsIndex = formFields.findIndex(field => field.arabicId === 'arabic-siblings');
  if (oldSiblingsIndex !== -1) {
    formFields.splice(oldSiblingsIndex, 1, ...siblingFields);
  }
}

// Children handling
function createChildrenFields(count) {
  const container = document.getElementById('children-container');
  container.innerHTML = ''; // Clear existing fields

  for (let i = 0; i < count; i++) {
    const childDiv = document.createElement('div');
    childDiv.className = 'child-member';
    childDiv.innerHTML = `
      <h4 class="child-title">Child ${i + 1}</h4>
      <div class="form-group">
        <label class="form-label" for="arabic-child-${i}-name">الاسم</label>
        <input type="text" class="form-control" id="arabic-child-${i}-name" dir="rtl" placeholder="أدخل الاسم">
      </div>
      <div class="form-group">
        <label class="form-label" for="arabic-child-${i}-dob">تاريخ الميلاد</label>
        <input type="text" class="form-control" id="arabic-child-${i}-dob" dir="rtl" placeholder="أدخل تاريخ الميلاد">
      </div>
      <div class="form-group">
        <label class="form-label" for="arabic-child-${i}-gender">الجنس</label>
        <select class="form-control" id="arabic-child-${i}-gender" dir="rtl">
          <option value="">اختر الجنس</option>
          <option value="ذكر">ذكر</option>
          <option value="أنثى">أنثى</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" for="arabic-child-${i}-residence">محل الإقامة</label>
        <input type="text" class="form-control" id="arabic-child-${i}-residence" dir="rtl" placeholder="أدخل محل الإقامة">
      </div>
      <div class="form-group">
        <label class="form-label" for="arabic-child-${i}-education">التعليم</label>
        <textarea class="form-control" id="arabic-child-${i}-education" dir="rtl" placeholder="أدخل معلومات التعليم"></textarea>
      </div>
    `;
    container.appendChild(childDiv);

    // Add event listeners for translation
    const arabicInputs = childDiv.querySelectorAll('input, select, textarea');
    arabicInputs.forEach(input => {
      input.addEventListener('change', () => {
        const englishId = input.id.replace('arabic-', 'english-');
        const englishInput = document.getElementById(englishId);
        if (englishInput) {
          translateField(input, englishInput);
        }
      });
    });
  }
}

// Update formFields array to include dynamic children fields
function updateChildrenFormFields() {
  const childrenCountSelect = document.getElementById('children-count');
  if (!childrenCountSelect) return;

  const childrenCount = parseInt(childrenCountSelect.value);
  const childrenFields = [];
  
  for (let i = 0; i < childrenCount; i++) {
    childrenFields.push(
      {
        arabicId: `arabic-child-${i}-name`,
        englishId: `english-child-${i}-name`,
        arabicLabel: `اسم الطفل ${i + 1}`,
        englishLabel: `Child ${i + 1} Name`
      },
      {
        arabicId: `arabic-child-${i}-dob`,
        englishId: `english-child-${i}-dob`,
        arabicLabel: `تاريخ ميلاد الطفل ${i + 1}`,
        englishLabel: `Child ${i + 1} Date of Birth`
      },
      {
        arabicId: `arabic-child-${i}-gender`,
        englishId: `english-child-${i}-gender`,
        arabicLabel: `جنس الطفل ${i + 1}`,
        englishLabel: `Child ${i + 1} Gender`
      },
      {
        arabicId: `arabic-child-${i}-residence`,
        englishId: `english-child-${i}-residence`,
        arabicLabel: `محل إقامة الطفل ${i + 1}`,
        englishLabel: `Child ${i + 1} Residence`
      },
      {
        arabicId: `arabic-child-${i}-education`,
        englishId: `english-child-${i}-education`,
        arabicLabel: `تعليم الطفل ${i + 1}`,
        englishLabel: `Child ${i + 1} Education`
      }
    );
  }
  
  // Replace the old children field with the new dynamic fields
  const oldChildrenIndex = formFields.findIndex(field => field.arabicId === 'arabic-children');
  if (oldChildrenIndex !== -1) {
    formFields.splice(oldChildrenIndex, 1, ...childrenFields);
  }
}

// Add logo to the application
function addLogo() {
  const logoContainer = document.createElement('div');
  logoContainer.className = 'logo-container';
  logoContainer.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
  `;

  const logo = document.createElement('img');
  logo.src = 'logo.png';
  logo.alt = 'Application Logo';
  logo.style.cssText = `
    max-width: 150px;
    height: auto;
  `;

  logoContainer.appendChild(logo);
  
  // Find the form title and insert the logo before it
  const formTitle = document.querySelector('h1');
  if (formTitle) {
    formTitle.parentNode.insertBefore(logoContainer, formTitle);
  }

  // Add styles to make the application take full window size
  const style = document.createElement('style');
  style.textContent = `
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    body {
      display: flex;
      flex-direction: column;
    }

    .container {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100vh;
      padding: 0;
      margin: 0;
      overflow: hidden;
      max-width: 100%;
    }

    .header {
      padding: 0.5rem;
      background-color: #f8f9fa;
      border-bottom: 1px solid #dee2e6;
      text-align: center;
    }

    .header h1 {
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }

    .header p {
      font-size: 1rem;
      margin: 0.5rem 0;
      color: #6c757d;
    }

    .main-content {
      flex: 1;
      overflow-y: auto;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    form {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      overflow-y: auto;
      width: 100%;
      max-width: 90%;
    }

    .form-section {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-bottom: 1rem;
      overflow: hidden;
      width: 100%;
    }

    .section-title {
      padding: 1rem;
      background: #f8f9fa;
      border-bottom: 1px solid #dee2e6;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .form-group {
      padding: 1.5rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: start;
    }

    .form-control {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ced4da;
      border-radius: 4px;
      font-size: 1rem;
    }

    .form-label {
      font-weight: 500;
      margin-bottom: 0.75rem;
      font-size: 1rem;
    }

    .buttons {
      position: sticky;
      bottom: 0;
      background: white;
      padding: 1.5rem;
      border-top: 1px solid #dee2e6;
      display: flex;
      gap: 1rem;
      justify-content: center;
      z-index: 1000;
      margin-top: 2rem;
      box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      min-width: 150px;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    .btn:active {
      transform: translateY(0);
    }

    .btn-primary {
      background: #007bff;
      color: white;
    }

    .btn-secondary {
      background: #6c757d;
      color: white;
    }

    .status {
      position: sticky;
      bottom: 0;
      background: white;
      padding: 1rem;
      margin: 0;
      text-align: center;
      border-top: 1px solid #dee2e6;
      z-index: 999;
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }

    .status:not(:empty) {
      transform: translateY(0);
    }

    .status.success {
      background: #d4edda;
      color: #155724;
    }

    .status.error {
      background: #f8d7da;
      color: #721c24;
    }

    .status.loading {
      background: #e2e3e5;
      color: #383d41;
    }

    @media (max-width: 1200px) {
      form {
        max-width: 95%;
      }
    }

    @media (max-width: 768px) {
      form {
        max-width: 100%;
      }
      .form-group {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  `;
  document.head.appendChild(style);

  // Move status below buttons
  const status = document.getElementById('status');
  const buttons = document.querySelector('.buttons');
  if (status && buttons) {
    buttons.parentNode.insertBefore(status, buttons.nextSibling);
  }

  // Update the container structure
  const container = document.querySelector('.container');
  if (container) {
    container.innerHTML = `
      <div class="header">
        <h1>Arabic to English Form Translator</h1>
        <p>Translate your Arabic form to English effortlessly.</p>
      </div>
      <div class="main-content">
        ${container.innerHTML}
      </div>
    `;
  }
}