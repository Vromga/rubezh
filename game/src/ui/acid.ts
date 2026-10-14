/** Пятна кислоты на стекле: мешают видеть и постепенно стекают. */
export class AcidLayer {
  constructor(private root: HTMLElement) {}

  splat(): void {
    const n = 2 + Math.floor(Math.random() * 3);
    const cx = 20 + Math.random() * 60;
    const cy = 25 + Math.random() * 45;
    for (let i = 0; i < n; i++) {
      const d = document.createElement('i');
      const size = 18 + Math.random() * 22;
      d.style.left = `${cx + (Math.random() - 0.5) * 22}%`;
      d.style.top = `${cy + (Math.random() - 0.5) * 18}%`;
      d.style.width = d.style.height = `${size}vmin`;
      this.root.appendChild(d);
      d.addEventListener('animationend', () => d.remove());
      // стереть пальцем: касание по пятну — «дворник»
      d.addEventListener('beforexrselect', (e) => e.preventDefault());
      d.addEventListener('pointerdown', (e) => { e.preventDefault(); d.classList.add('wipe'); });
    }
  }

  clear(): void { this.root.innerHTML = ''; }
}
