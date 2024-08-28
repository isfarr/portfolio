class GhostCursor {
  constructor() {
      if (this.isMobile()) {
          return; // Exit if the user is on a mobile device
      }
      this.init();
  }

  isMobile() {
      return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/.test(navigator.userAgent);
  }

  init() {
      this.cursor = document.createElement("div");
      this.cursor.style.width = "30px";
      this.cursor.style.height = "30px";
      this.cursor.style.borderRadius = "50%";
      this.cursor.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      this.cursor.style.position = "fixed";
      this.cursor.style.pointerEvents = "none";
      this.cursor.style.zIndex = "10000";
      this.cursor.style.transition = "transform 0.1s ease";
      document.body.appendChild(this.cursor);

      this.moveCursor = this.moveCursor.bind(this);
      document.addEventListener("mousemove", this.moveCursor);
  }

  moveCursor(event) {
      this.cursor.style.transform = `translate(${event.clientX - 15}px, ${event.clientY - 15}px)`;
  }
}

new GhostCursor();
