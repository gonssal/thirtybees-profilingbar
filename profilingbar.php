<?php
/**
 * © Marc González Majoral
 *
 * DISCLAIMER: Do not edit or add to this file if you wish to upgrade to newer
 * versions in the future.
 *
 * @author    Marc González Majoral <gonssal@gmail.com>
 * @copyright 2017 Marc González Majoral
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

if (!defined('_PS_VERSION_')) {
    exit;
}

class ProfilingBar extends Module
{

    /**
     * Constructor
     * 
     * @see Module::__construct()
     */
    public function __construct()
    {

        $this->name = 'profilingbar';
        $this->tab = 'others';
        $this->version = '1.0';
        $this->ps_versions_compliancy = array('min' => '1.5.0.1', 'max' => _PS_VERSION_);
        $this->author = 'Marc González Majoral';
        $this->need_instance = 0;
        $this->bootstrap = true;

        parent::__construct();

        $this->displayName = $this->l('Profiling bar');
        $this->description = $this->l('Pack all the core profiling information into a convenient fixed debug bar.');

        $this->confirmUninstall = $this->l('Are you sure you want to uninstall the Profiling Bar module?');

        $this->context->smarty->assign('module_name', $this->name);

        /**
         * Implemented hooks
         */
        $this->hooks = array(
            // displays
            'actionAdminControllerSetMedia',
            'actionFrontControllerSetMedia',
        );

    } // __construct()

    /**
     * Install the module
     *
     * @return boolean
     */
    public function install()
    {

        if (
            !parent::install()
            or !$this->registerHooks()
        ) {

            return false;

        }

        return true;

    } // install()

    /**
     * Uninstall the module
     *
     * @return boolean
     */
    public function uninstall()
    {

        if (!parent::uninstall()) {

            return false;

        }

        return true;

    } // uninstall()

    /**
     * After setting media on admin controllers
     *
     * @param array $params Parameters
     */
    public function hookActionAdminControllerSetMedia($params)
    {

        $this->enableToolbar();

    }

    /**
     * After setting media on front controllers
     *
     * @param array $params Parameters
     */
    public function hookActionFrontControllerSetMedia($params)
    {

        $this->enableToolbar();

    }

    /**
     * Register the module hooks
     *
     * @return boolean
     */
    private function registerHooks()
    {

        if (!empty($this->hooks)) {

            foreach ($this->hooks as $hook) {

                if (!$this->registerHook($hook)) {

                    return false;

                }

            }

        }

        return true;

    }

    /**
     * Enable the profiling toolbar
     *
     * @return void
     */
    private function enableToolbar() {

        if (_PS_DEBUG_PROFILING_) {
            
            $this->context->controller->addCSS($this->getPathUri().'views/css/toolbar.css', 'screen');
            $this->context->controller->addCSS($this->getPathUri().'views/css/prism.css', 'screen');
            $this->context->controller->addJquery();
            $this->context->controller->addJS($this->getPathUri().'views/js/prism.js');
            $this->context->controller->addJS($this->getPathUri().'views/js/toolbar.js');

        }

    }

}
