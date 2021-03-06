const sidenav = document.querySelector('#sidenav-open');
const closenav = document.querySelector('#sidenav-close');
const opennav = document.querySelector('#sidenav-button');
sidenav.addEventListener('transitionend', e => {
  if (e.propertyName !== 'transform') return;
  const isOpen = document.location.hash === '#sidenav-open';
  isOpen ? closenav.focus() : opennav.focus();

  if (!isOpen) {
    history.replaceState(history.state, '');
  }
});
sidenav.addEventListener('keyup', e => {
  if (e.code === 'Escape') window.history.length ? window.history.back() : document.location.hash = '';
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJqcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaWRlbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGVuYXYtb3BlbicpXHJcbmNvbnN0IGNsb3NlbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGVuYXYtY2xvc2UnKVxyXG5jb25zdCBvcGVubmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGVuYXYtYnV0dG9uJylcclxuXHJcbnNpZGVuYXYuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGUgPT4ge1xyXG4gICAgaWYgKGUucHJvcGVydHlOYW1lICE9PSAndHJhbnNmb3JtJylcclxuICAgICAgICByZXR1cm5cclxuXHJcbiAgICBjb25zdCBpc09wZW4gPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoID09PSAnI3NpZGVuYXYtb3BlbidcclxuXHJcbiAgICBpc09wZW5cclxuICAgICAgICA/IGNsb3NlbmF2LmZvY3VzKClcclxuICAgICAgICA6IG9wZW5uYXYuZm9jdXMoKVxyXG5cclxuICAgIGlmICghaXNPcGVuKSB7XHJcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeS5zdGF0ZSwgJycpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5zaWRlbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XHJcbiAgICBpZiAoZS5jb2RlID09PSAnRXNjYXBlJylcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5sZW5ndGhcclxuICAgICAgICAgICAgPyB3aW5kb3cuaGlzdG9yeS5iYWNrKClcclxuICAgICAgICAgICAgOiBkb2N1bWVudC5sb2NhdGlvbi5oYXNoID0gJydcclxufSkiXSwibmFtZXMiOlsic2lkZW5hdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb3NlbmF2Iiwib3Blbm5hdiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJvcGVydHlOYW1lIiwiaXNPcGVuIiwibG9jYXRpb24iLCJoYXNoIiwiZm9jdXMiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwic3RhdGUiLCJjb2RlIiwid2luZG93IiwibGVuZ3RoIiwiYmFjayJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBaEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBakI7QUFDQSxNQUFNRSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBaEI7QUFFQUYsT0FBTyxDQUFDSyxnQkFBUixDQUF5QixlQUF6QixFQUEwQ0MsQ0FBQyxJQUFJO0FBQzNDLE1BQUlBLENBQUMsQ0FBQ0MsWUFBRixLQUFtQixXQUF2QixFQUNJO0FBRUosUUFBTUMsTUFBTSxHQUFHUCxRQUFRLENBQUNRLFFBQVQsQ0FBa0JDLElBQWxCLEtBQTJCLGVBQTFDO0FBRUFGLEVBQUFBLE1BQU0sR0FDQUwsUUFBUSxDQUFDUSxLQUFULEVBREEsR0FFQVAsT0FBTyxDQUFDTyxLQUFSLEVBRk47O0FBSUEsTUFBSSxDQUFDSCxNQUFMLEVBQWE7QUFDVEksSUFBQUEsT0FBTyxDQUFDQyxZQUFSLENBQXFCRCxPQUFPLENBQUNFLEtBQTdCLEVBQW9DLEVBQXBDO0FBQ0g7QUFDSixDQWJEO0FBZUFkLE9BQU8sQ0FBQ0ssZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0NDLENBQUMsSUFBSTtBQUNuQyxNQUFJQSxDQUFDLENBQUNTLElBQUYsS0FBVyxRQUFmLEVBQ0lDLE1BQU0sQ0FBQ0osT0FBUCxDQUFlSyxNQUFmLEdBQ01ELE1BQU0sQ0FBQ0osT0FBUCxDQUFlTSxJQUFmLEVBRE4sR0FFTWpCLFFBQVEsQ0FBQ1EsUUFBVCxDQUFrQkMsSUFBbEIsR0FBeUIsRUFGL0I7QUFHUCxDQUxEIn0=
