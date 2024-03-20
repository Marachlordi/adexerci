it('should pass', function() {
  this.timeout(1000);

  setTimeout(function() {
    done();
  }, 500);
});
