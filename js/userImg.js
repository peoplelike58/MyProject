function usePhoto() {
    const photoLeft1 = document.querySelector('.photoLeft1');
    const photoLeft2 = document.querySelector('.photoLeft2');
    const photoRight1 = document.querySelector('.photoRight1');
    const photoRight2 = document.querySelector('.photoRight2');
    const photoTopList = document.querySelector('.photoTopList');

    const photoLeft1Text = document.querySelector('.photoLeft1Text');
    const photoLeft2Text = document.querySelector('.photoLeft2Text');
    const photoRight1Text = document.querySelector('.photoRight1Text');
    const photoRight2Text = document.querySelector('.photoRight2Text');

    photoTopList.addEventListener('mouseleave', () => {
        photoLeft1.style.width = '250px';
        photoLeft2.style.width = '250px';
        photoRight1.style.width = '250px';
        photoRight2.style.width = '250px';
    });

    photoLeft1.addEventListener('mouseenter', () => {
        photoLeft1.style.width = '300px';
        photoLeft2.style.width = '50px';
        photoRight1.style.width = '50px';
        photoRight2.style.width = '50px';

        photoLeft1Text.style.display = 'block';
        photoLeft2Text.style.display = 'none';
        photoRight1Text.style.display = 'none';
        photoRight2Text.style.display = 'none';
    });

    photoLeft2.addEventListener('mouseenter', () => {
      photoLeft2.style.width = '300px';
      photoLeft1.style.width = '50px';
      photoRight1.style.width = '50px';
      photoRight2.style.width = '50px';

        photoLeft1Text.style.display = 'none';
        photoLeft2Text.style.display = 'block';
        photoRight1Text.style.display = 'none';
        photoRight2Text.style.display = 'none';
  });

    photoRight1.addEventListener('mouseenter', () => {
      photoRight1.style.width = '300px';
      photoLeft1.style.width = '50px';
      photoLeft2.style.width = '50px';
      photoRight2.style.width = '50px';

        photoLeft1Text.style.display = 'none';
        photoLeft2Text.style.display = 'none';
        photoRight1Text.style.display = 'block';
        photoRight2Text.style.display = 'none';
    });
    
    photoRight2.addEventListener('mouseenter', () => {
      photoRight2.style.width = '300px';
      photoLeft1.style.width = '50px';
      photoLeft2.style.width = '50px';
      photoRight1.style.width = '50px';

        photoLeft1Text.style.display = 'none';
        photoLeft2Text.style.display = 'none';
        photoRight1Text.style.display = 'none';
        photoRight2Text.style.display = 'block';
    });

    photoLeft1.addEventListener('mouseleave', () => {
        photoLeft1.style.width = '250px';
        photoLeft1.style.height = '250px';
        photoLeft1.style.borderRadius = '20px';

        photoLeft1Text.style.display = 'none';
        photoLeft2Text.style.display = 'none';
        photoRight1Text.style.display = 'none';
        photoRight2Text.style.display = 'none';
    });
    
    photoLeft2.addEventListener('mouseleave', () => {
      photoLeft2.style.width = '250px';
      photoLeft2.style.height = '250px';
      photoLeft2.style.borderRadius = '20px';

      photoLeft1Text.style.display = 'none';
      photoLeft2Text.style.display = 'none';
      photoRight1Text.style.display = 'none';
      photoRight2Text.style.display = 'none';
    });

    photoRight1.addEventListener('mouseleave', () => {
      photoRight1.style.width = '250px';
      photoRight1.style.height = '250px';
      photoRight1.style.borderRadius = '20px';

      photoLeft1Text.style.display = 'none';
      photoLeft2Text.style.display = 'none';
      photoRight1Text.style.display = 'none';
      photoRight2Text.style.display = 'none';
    });

    photoRight2.addEventListener('mouseleave', () => {
      photoRight2.style.width = '250px';
      photoRight2.style.height = '250px';
      photoRight2.style.borderRadius = '20px';

      photoLeft1Text.style.display = 'none';
      photoLeft2Text.style.display = 'none';
      photoRight1Text.style.display = 'none';
      photoRight2Text.style.display = 'none';
    });
}

usePhoto()