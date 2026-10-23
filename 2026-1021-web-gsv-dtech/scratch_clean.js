
(function() {
  function initGSVDTech() {
    /**
 * GSV DTech Website Interactive Scripts
 * Handles workflow tabs, pricing switcher, mobile navigation, demo modal, and scroll animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initHeaderScroll();
  initMobileMenu();
  initWorkflowTabs();
  initRealUiTabs();
  initPricingSwitch();
  initComparisonToggle();
  initDemoModal();
  initLeadForm();
});

/* ----------------------------------------------------
   1. Scroll Reveal Animations (Fade in & Slide up)
   ---------------------------------------------------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appeared');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ----------------------------------------------------
   2. Header Scroll Effect
   ---------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ----------------------------------------------------
   3. Mobile Navigation Drawer
   ---------------------------------------------------- */
function initMobileMenu() {
  const openBtn = document.querySelector('.mobile-menu-btn');
  const closeBtn = document.querySelector('.drawer-close-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-nav-link');

  if (!openBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.style.display = 'block'; overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.style.display = 'none'; overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ----------------------------------------------------
   4. Interactive Workflow Steps Switcher
   ---------------------------------------------------- */
const workflowData = {
  1: {
    title: 'Tìm hồ sơ khách cũ trong vài giây',
    desc: 'Khách quay lại không phải khai báo lại từ đầu. Hồ sơ, lịch sử điều trị và lịch hẹn nằm cùng một nơi, lễ tân chỉ cần gõ tên hoặc số điện thoại.',
    checks: [
      'Hồ sơ khách hàng và bệnh nhân dùng chung toàn phần mềm',
      'Đăng ký lịch khám trực tuyến & phân luồng thông minh',
      'Danh sách chờ theo thời gian thực: Chờ khám, Đang khám, Đã khám',
      'Setup dữ liệu căn bản do GSV DTech nhập sẵn cho bạn'
    ],
    image: 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/ui_customer_modal.png',
    alt: 'Giao diện Tiếp đón và Hồ sơ khách hàng'
  },
  2: {
    title: 'Bệnh án điện tử và đơn thuốc liên thông',
    desc: 'Bác sĩ xem lại lịch sử điều trị, ghi bệnh án da liễu và kê đơn trên cùng một màn hình, rồi liên thông lên hệ thống Đơn thuốc quốc gia chỉ với 1 click.',
    checks: [
      'Bệnh án điện tử chuyên khoa da liễu chuẩn Bộ Y tế',
      'Kê đơn thuốc nội bộ, tự động cảnh báo tương tác thuốc',
      'Liên thông tự động lên Cổng Đơn thuốc Quốc gia ở mọi gói',
      'Lưu trữ ảnh tiến triển da (trước/sau điều trị) chất lượng cao'
    ],
    image: 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/ui_exam_prescription.png',
    alt: 'Giao diện Khám bệnh và Bệnh án điện tử'
  },
  3: {
    title: 'Thu phí gọn, bán kèm dược mỹ phẩm',
    desc: 'Phí khám, thủ thuật và sản phẩm chăm sóc da gom vào một phiếu thu, không phải cộng tay, xuất hóa đơn điện tử một lần.',
    checks: [
      'Gom mọi khoản phí thủ thuật và mỹ phẩm vào 1 hóa đơn',
      'Quản lý danh sách khách hàng chờ thu, công nợ minh bạch',
      'Kết nối hóa đơn điện tử MISA, Tendoo, iHoaDon không mất phí',
      'Tính hoa hồng tức thì cho nhân viên tư vấn & bác sĩ'
    ],
    image: 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/ui_billing_sales.png',
    alt: 'Giao diện Thu phí và Phiếu bán hàng'
  },
  4: {
    title: 'Kho thuốc & vật tư không lo thất thoát',
    desc: 'Theo dõi chi tiết xuất - nhập - tồn kho thuốc và dược mỹ phẩm theo từng chi nhánh, kiểm soát lô và hạn sử dụng chặt chẽ.',
    checks: [
      'Quản lý danh mục thuốc, vật tư, dược mỹ phẩm và giá niêm yết',
      'Cảnh báo thuốc sắp hết hạn sử dụng và chạm ngưỡng an toàn',
      'Phiếu nhập kho, xuất kho, dự trù mua hàng tự động',
      'Chốt kho định kỳ nhanh chóng, hạn chế sai lệch hàng'
    ],
    image: 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/real_ui_overview.png',
    alt: 'Giao diện Quản lý Kho thuốc và vật tư'
  },
  5: {
    title: 'Chăm sóc sau điều trị tự động qua Zalo OA',
    desc: 'Hệ thống tự động lọc danh sách khách đến kỳ tái khám, khách lỡ hẹn để gửi tin nhắn nhắc nhở và kích hoạt khách hàng quay lại phòng khám.',
    checks: [
      'Tự động gửi tin nhắn nhắc lịch tái khám qua Zalo OA & SMS',
      'Danh sách khách hàng lỡ hẹn riêng biệt để lễ tân gọi lại',
      'Gửi lời chúc mừng sinh nhật kèm ưu đãi tri ân',
      'Ghi nhận đánh giá hài lòng và giải quyết khiếu nại kịp thời'
    ],
    image: 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/hero_dashboard_mockup.png',
    alt: 'Giao diện CRM Chăm sóc sau điều trị'
  },
  6: {
    title: 'Biết phòng khám đang lãi hay lỗ, mỗi ngày',
    desc: 'Chủ phòng khám xem doanh thu, dịch vụ bán chạy và hoa hồng nhân viên mà không cần chờ đến cuối tháng.',
    checks: [
      'Báo cáo doanh thu, doanh số, dịch vụ và phác đồ điều trị',
      'Thống kê khách hàng theo số lượng và nguồn khách (Facebook, Zalo, Giới thiệu)',
      'Báo cáo kế toán, xuất nhập tồn kho tài chính',
      'Tính hoa hồng tự động minh bạch cho bác sĩ và kỹ thuật viên'
    ],
    image: 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/ui_revenue_chart.png',
    alt: 'Giao diện Báo cáo Doanh thu và Dịch vụ'
  }
};

function initWorkflowTabs() {
  const stepBtns = document.querySelectorAll('.step-nav-btn');
  const displayTitle = document.getElementById('workflowDisplayTitle');
  const displayDesc = document.getElementById('workflowDisplayDesc');
  const displayChecks = document.getElementById('workflowDisplayChecks');
  const displayImg = document.getElementById('workflowDisplayImg');

  if (!stepBtns.length || !displayTitle) return;

  stepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const step = btn.getAttribute('data-step');
      const data = workflowData[step];
      if (!data) return;

      // Update active state on buttons
      stepBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update content with smooth transition
      displayTitle.textContent = data.title;
      displayDesc.textContent = data.desc;
      displayImg.src = data.image;
      displayImg.alt = data.alt;

      // Update checks
      displayChecks.innerHTML = data.checks.map(c => `
        <li>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${c}</span>
        </li>
      `).join('');
    });
  });
}

/* ----------------------------------------------------
   5. Real UI Showcase Tabs
   ---------------------------------------------------- */
const realUiData = {
  overview: {
    title: 'Mở máy là biết hôm nay cần làm gì',
    desc: 'Màn hình đầu tiên khi đăng nhập gom mọi việc trong ngày của phòng khám vào một chỗ.',
    checks: [
      'Lịch hẹn trong ngày theo trạng thái',
      'Danh sách khách cần nhắc hẹn',
      'Cảnh báo thuốc, mỹ phẩm hết hàng',
      'Tỉ lệ các loại khám trong ngày'
    ],
    image: 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/real_ui_overview.png'
  },
  care: {
    title: 'Chăm sóc khách hàng tự động, chu đáo',
    desc: 'Lễ tân và điều dưỡng theo dõi toàn bộ trạng thái khách hàng sau thủ thuật và lịch hẹn nhắc lại.',
    checks: [
      'Gửi tin nhắn Zalo OA tự động',
      'Danh sách khách lỡ hẹn cần gọi lại',
      'Lịch sử phản hồi sau liệu trình da',
      'Theo dõi tiến triển da qua từng buổi'
    ],
    image: 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/hero_dashboard_mockup.png'
  },
  revenue: {
    title: 'Báo cáo doanh thu và hoa hồng tức thì',
    desc: 'Nắm bắt nguồn thu từ khám bệnh, laser, peel da, mỹ phẩm và thuốc theo thời gian thực.',
    checks: [
      'Biểu đồ doanh thu theo nhóm dịch vụ',
      'Tự động chốt hoa hồng bác sĩ',
      'So sánh doanh thu giữa các cơ sở',
      'Xuất file báo cáo kế toán trong 1 click'
    ],
    image: 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/ui_revenue_chart.png'
  },
  customers: {
    title: 'Thống kê nguồn khách và tỷ lệ quay lại',
    desc: 'Hiểu rõ khách hàng đến từ đâu và dịch vụ nào có tỷ lệ khách tái khám cao nhất.',
    checks: [
      'Phân loại nguồn khách hàng chính xác',
      'Tỷ lệ chuyển đổi từ tư vấn sang làm dịch vụ',
      'Báo cáo khách hàng mới và khách thân thiết',
      'Đánh giá hiệu quả các chiến dịch marketing'
    ],
    image: 'https://gsvdtech.thaipham.top/wp-content/uploads/2026/10/ui_customer_modal.png'
  }
};

function initRealUiTabs() {
  const tabBtns = document.querySelectorAll('.ui-tab-btn');
  const stageImg = document.getElementById('realUiImg');
  const titleEl = document.getElementById('realUiTitle');
  const descEl = document.getElementById('realUiDesc');
  const checksContainer = document.getElementById('realUiChecks');

  if (!tabBtns.length || !stageImg) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabKey = btn.getAttribute('data-tab');
      const data = realUiData[tabKey];
      if (!data) return;

      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      stageImg.src = data.image;
      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.desc;
      if (checksContainer) {
        checksContainer.innerHTML = data.checks.map(c => `
          <div class="real-ui-check-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008F4D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${c}</span>
          </div>
        `).join('');
      }
    });
  });
}

/* ----------------------------------------------------
   6. Pricing Billing Switcher (Monthly vs Annual)
   ---------------------------------------------------- */
function initPricingSwitch() {
  const switchBtns = document.querySelectorAll('.switch-option');
  const priceEls = document.querySelectorAll('.plan-price');

  if (!switchBtns.length || !priceEls.length) return;

  const pricing = {
    monthly: ['299.000đ', '399.000đ', '699.000đ'],
    annual: ['249.000đ', '329.000đ', '579.000đ'] // ~2 months free equivalent
  };

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-billing');
      switchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      priceEls.forEach((el, index) => {
        if (pricing[mode] && pricing[mode][index]) {
          el.textContent = pricing[mode][index];
        }
      });
    });
  });
}

/* ----------------------------------------------------
   7. Comparison Table Accordion Toggle
   ---------------------------------------------------- */
function initComparisonToggle() {
  const toggleBtn = document.querySelector('.comparison-toggle-btn');
  const tableWrap = document.querySelector('.comparison-table-wrapper');

  if (!toggleBtn || !tableWrap) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = tableWrap.style.display === 'none';
    tableWrap.style.display = isHidden ? 'block' : 'none';
    const chevron = toggleBtn.querySelector('.toggle-icon');
    if (chevron) {
      chevron.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
    }
  });
}

/* ----------------------------------------------------
   8. Demo 90s Modal Video/Walkthrough
   ---------------------------------------------------- */
function initDemoModal() {
  const openBtns = document.querySelectorAll('.open-demo-modal');
  const modal = document.getElementById('demoModal');
  const closeBtn = document.querySelector('.modal-close-btn');

  if (!openBtns.length || !modal) return;

  const openModal = (e) => {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  openBtns.forEach(btn => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

/* ----------------------------------------------------
   9. Lead Registration Form Handling
   ---------------------------------------------------- */
function initLeadForm() {
  const forms = document.querySelectorAll('.lead-register-form');
  const toast = document.getElementById('toastNotice');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type=\"submit\"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Đang gửi thông tin...</span>';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        form.reset();

        if (toast) {
          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show');
          }, 4500);
        } else {
          alert('Cảm ơn bạn! Tư vấn viên GSV DTech sẽ liên hệ lại trong vòng 15 phút để kích hoạt tài khoản trải nghiệm.');
        }
      }, 700);
    });
  });
}

  const demoModalCloseCta = document.getElementById('demoModalCloseCta');
  if (demoModalCloseCta) {
    demoModalCloseCta.addEventListener('click', () => {
      const modal = document.getElementById('demoModal');
      if (modal) modal.classList.remove('active');
    });
  }
  
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGSVDTech);
  } else {
    initGSVDTech();
  }
})();
