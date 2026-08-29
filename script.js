// 1. سكرول ناعم لما تدوس "اطلب دلوقتي"
document.querySelector('.btn-main').addEventListener('click', (e) => {
  if(e.target.getAttribute('href') === '#order') {
    e.preventDefault();
    document.querySelector('#order').scrollIntoView({ behavior: 'smooth' });
  }
});


// 2. ارسال الطلب لـ Firebase
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const product = document.getElementById('product').value;

  try {
    await addDoc(collection(window.db, "orders"), {
      name: name,
      phone: phone,
      address: address,
      product: product,
      date: new Date()
    });

    alert("تم استلام طلبك بنجاح! هنتواصل معاك قريب");
    orderForm.reset();

  } catch (error) {
    console.error("Error: ", error);
    alert("حصل خطأ، جرب تاني");
  }
});