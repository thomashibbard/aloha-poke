<?php
/**
 * Footer Template
 *
 *
 * @file           footer.php
 * @package        StanleyWP 
 * @author         Brad Williams & Carlos Alvarez 
 * @copyright      2011 - 2014 Gents Themes
 * @license        license.txt
 * @version        Release: 3.0.3
 * @link           http://codex.wordpress.org/Theme_Development#Footer_.28footer.php.29
 * @since          available since Release 1.0
 */
?>
</div><!-- end of wrapper-->
<?php gents_wrapper_end(); // after wrapper hook ?>


<?php gents_container_end(); // after container hook ?>


  <!-- +++++ Footer Section +++++ -->
<footer id="footer">
<div class="container">
<!--   <div class="ap-hours-footer">
    <div class="ap-hours-container">
      <div class="ap-hours-day-container">
        Monday : 5:00 - 11:00
      </div>
      <div class="ap-hours-day-container">
        Tuesday : 5:00 - 11:00
      </div>
      <div class="ap-hours-day-container">
        Wednesday : 5:00 - 11:00
      </div>
      <div class="ap-hours-day-container">
        Thursday : 5:00 - 11:00
      </div>
      <div class="ap-hours-day-container">
        Friday : 5:00 - 11:00
      </div>
      <div class="ap-hours-day-container">
        Saturday : Closed
      </div>
      <div class="ap-hours-day-container">
        Sunday : Closed
      </div>
    </div>
  </div> -->
      <div class="row">
        <div class="col-lg-4">
          <p>
            CHICAGO FRENCH MARKET
            <br>
            131 N CLINTON ST CHICAGO IL 60661 
            <a><i class="fa fa-map-marker"></i></a>
            <br>
            312.877.5336
          </p>
          <?php dynamic_sidebar('footer-left'); ?>
        </div>
        <div class="col-lg-4">
            <div class="ap-hours-container">
              <?php dynamic_sidebar('footer-middle'); ?>
            </div>
        </div>
        <div class="col-lg-4">
          <p>
            <span class="vr vr-small"></span>
            <a href="#" class="ap-social-container ap-social-twitter"><i class="fa fa-twitter"></i></a>
            <span class="vr vr-small"></span>
            <a href="#" class="ap-social-container ap-social-facebook"><i class="fa fa-facebook"></i></a>
            <span class="vr vr-small"></span>
            <a href="#" class="ap-social-container ap-social-pinterest"><i class="fa fa-pinterest-p"></i></a>                    
          </p>
          <?php dynamic_sidebar('footer-right'); ?>
        </div>
      
      </div><!-- /row -->
    </div><!-- /container -->
</footer><!-- end #footer -->




<?php wp_footer(); ?>

</body>
</html>