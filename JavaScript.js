// תצוגת פרטי איש קשר
document.querySelectorAll('.contact-item').forEach(item => {
    item.querySelector('.contact-actions .action-icon[title="View Details"]').addEventListener('click', e => {
        e.preventDefault();

        const photo = item.querySelector('.contact-photo').src;
        const name = item.querySelector('.contact-name').textContent;
        const phone = item.querySelector('.contact-phone').textContent;

        const emailElem = item.querySelector('.contact-email');
        const email = emailElem ? emailElem.textContent : 'No email';

        document.getElementById('detailPhoto').src = photo;
        document.getElementById('detailName').textContent = name;
        document.getElementById('detailPhone').textContent = phone;
        document.getElementById('detailEmail').textContent = email;

        document.getElementById('contactDetails').style.display = 'block';
    });
});

// סגירת כרטיס פרטים
document.getElementById('closeDetails').addEventListener('click', () => {
    document.getElementById('contactDetails').style.display = 'none';
});

// מחיקה ושחזור של אנשי קשר
document.addEventListener('DOMContentLoaded', () => {
    const clearBtn = document.getElementById('clearBtn');
    const restoreBtn = document.getElementById('restoreBtn');
    const contactsListUL = document.querySelector('.contacts-list ul');

    // שמירת אנשי הקשר המקוריים
    const originalContactsHTML = contactsListUL.innerHTML;

    clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        contactsListUL.innerHTML = ''; // מוחק הכל
    });

    restoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        contactsListUL.innerHTML = originalContactsHTML;

        document.querySelectorAll('.contact-item').forEach(item => {
            item.querySelector('.contact-actions .action-icon[title="View Details"]').addEventListener('click', e => {
                e.preventDefault();

                const photo = item.querySelector('.contact-photo').src;
                const name = item.querySelector('.contact-name').textContent;
                const phone = item.querySelector('.contact-phone').textContent;

                const emailElem = item.querySelector('.contact-email');
                const email = emailElem ? emailElem.textContent : 'No email';

                document.getElementById('detailPhoto').src = photo;
                document.getElementById('detailName').textContent = name;
                document.getElementById('detailPhone').textContent = phone;
                document.getElementById('detailEmail').textContent = email;

                document.getElementById('contactDetails').style.display = 'block';
            });
        });
    });
});
