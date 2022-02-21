<?php

namespace App\Http\Controllers\Documentation;

use App\Core\Adapters\Theme;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Symfony\Component\Finder\Exception\DirectoryNotFoundException;

class ReferencesController extends Controller
{
    /**
     * Reference page for documentation
     *
     * @param  Theme  $theme
     *
     * @return \Illuminate\Contracts\View\View
     * @throws \JsonException
     */
    public function index()
    {
        // Get list of Composer packages
        $composer = $this->getComposerPackages();

        // Get list of NPM packages
        $npm = $this->getNpmPackages();

        return view('pages.'.theme()->getOption('page', 'view'), compact('composer', 'npm'));
    }


    /**
     * Get list of Composer packages from composer.json file
     *
     * @return array|mixed
     */
    public function getComposerPackages()
    {
        $content = file_get_contents(base_path('composer.json'));

        $json         = json_decode($content, true);
        $dependencies = array_merge($json['require'], $json['require-dev']);

        // predefined
        $references = array();

        foreach ($dependencies as $plugin => $version) {
            $filesInFolder = '';

            try {
                $filesInFolder = File::files(base_path('vendor/'.$plugin));
            } catch (DirectoryNotFoundException $exception) {
            }

            if (!empty($filesInFolder)) {
                foreach ($filesInFolder as $file) {
                    if (str_ends_with($file->getPathname(), 'composer.json')) {

                        $plugin_content = file_get_contents($file->getPathname());
                        $plugin_json    = json_decode($plugin_content, true);

                        $url = '';
                        if (isset($plugin_json['homepage'])) {
                            $url = $plugin_json['homepage'];
                        }

                        if (isset($plugin_json['authors'][0]['homepage'])) {
                            $url = $plugin_json['authors'][0]['homepage'];
                        }

                        if (empty($url)) {
                            $url = 'https://packagist.org/packages/'.$plugin;
                        }

                        $references[$plugin] = array(
                            'name'    => $plugin,
                            'desc'    => $plugin_json['description'],
                            'url'     => $url,
                            'version' => str_replace(['^'], '', $version),
                        );
                    }
                }
            }
        }

        return $references;
    }

    /**
     * Get the NPM packages from package.json file
     *
     * @return mixed|\string[][]
     * @throws \JsonException
     */
    public function getNpmPackages()
    {
        $content = file_get_contents(base_path('package.json'));

        $json         = json_decode($content, true, 512, JSON_THROW_ON_ERROR);
        $dependencies = $json['dependencies'];

        // predefined
        $references = array(
            array(
                'name'    => 'Node.js',
                'url'     => 'https://nodejs.org/en/',
                'version' => '14.16.0',
            ),
        );

        foreach ($dependencies as $plugin => $version) {
            $filesInFolder = '';

            try {
                $filesInFolder = File::files(base_path('node_modules/'.$plugin));
            } catch (DirectoryNotFoundException $exception) {
            }

            if (!empty($filesInFolder)) {
                foreach ($filesInFolder as $file) {
                    if (str_ends_with($file->getPathname(), 'package.json')) {

                        $plugin_content = file_get_contents($file->getPathname());
                        $plugin_json    = json_decode($plugin_content, true, 512, JSON_THROW_ON_ERROR);

                        $url = '';
                        if (isset($plugin_json['homepage'])) {
                            $url = $plugin_json['homepage'];
                        }

                        if (!empty($url)) {
                            $references[] = array(
                                'name'    => $plugin,
                                'desc'    => $plugin_json['description'] ?? '',
                                'url'     => $url,
                                'version' => str_replace(['^'], '', $version),
                            );
                        }
                    }
                }
            }
        }

        return $references;
    }

}
